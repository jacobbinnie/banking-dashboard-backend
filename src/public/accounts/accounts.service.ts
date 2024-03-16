import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import {
  AccountAndBalanceDto,
  AccountBalanceDto,
  AccountsAndBalancesDto,
} from './dto/accountsAndBalances.dto';
import { AccountType, UsageType } from 'src/types/index';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  private async getConsentToken(userId: string) {
    const consent = await this.prisma.consents.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
    });

    return consent?.token;
  }

  async initiateConnectAccount(
    applicationUserId: string,
    institutionId: string,
  ) {
    // const resp = await axios.post(
    //   `https://api.yapily.com/account-auth-requests`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       'psu-id': 'string',
    //       'psu-corporate-id': 'string',
    //       'psu-ip-address': 'string',
    //       Authorization: 'Basic ' + btoa('<username>:<password>'),
    //     },
    //     body: JSON.stringify({
    //       applicationUserId: 'john.doe@company.com',
    //       institutionId: 'chase',
    //       callback: 'https://jacobs-banking-dashboard.com/',
    //       oneTimeToken: true;
    //     }),
    //   },
    // );

    // const data = await resp.data;

    // TODO: This what the code would look like if we were using Yapily to connect to the bank. For now we'll just mock the reponse.
    return `https://chase.com/authorize`;
  }

  async verifyConnect(userId: string, authCode: string, authState: string) {
    try {
      // const resp = await fetch(`https://api.yapily.com/consent-auth-code`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: 'Basic ' + btoa('<username>:<password>'),
      //   },
      //   body: JSON.stringify({
      //     authCode,
      //     authState,
      //   }),
      // });

      // const data = await resp.json();

      const existingConsent = await this.prisma.consents.findFirst({
        where: {
          user: {
            id: userId,
          },
        },
      });

      if (existingConsent) {
        await this.prisma.consents.update({
          where: {
            id: existingConsent.id,
          },
          data: {
            deletedAt: new Date(),
          },
        });
      }

      // TODO: not the most secure way to store consents. However, could use one way hashing to store the consent token in the database.
      await this.prisma.consents.create({
        data: {
          expiry: new Date(new Date().getTime() + 89 * 24 * 60 * 60 * 1000),
          token: '1234567890',
          userId,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }

  demoAccountsAndBalances = [
    {
      id: '700004000000000000000002',
      type: 'Personal - Current',
      balance: -12.57,
      currency: 'GBP',
      usageType: 'Personal',
      accountType: 'CashPayment',
      nickname: 'xxxx0006',
      accountNames: [
        {
          name: 'Mr. Roberto Rastapopoulos & Ivan Sakharine',
        },
      ],
      accountIdentifications: [
        {
          type: 'SORT_CODE',
          identification: '700001',
        },
        {
          type: 'ACCOUNT_NUMBER',
          identification: '70000002',
        },
      ],
      accountBalances: [
        {
          type: 'EXPECTED',
          dateTime: '2021-06-09T08:51:02.463Z',
          balanceAmount: {
            amount: -12.57,
            currency: 'GBP',
          },
          creditLineIncluded: false,
          creditLines: [],
        },
      ],
    },
    {
      id: '700004000000000000000003',
      type: 'Personal - Savings',
      balance: 2300.75,
      currency: 'USD',
      usageType: 'Personal',
      accountType: 'Savings',
      nickname: 'Savings Account',
      accountNames: [
        {
          name: 'John Doe',
        },
      ],
      accountIdentifications: [
        {
          type: 'ROUTING_NUMBER',
          identification: '123456789',
        },
        {
          type: 'ACCOUNT_NUMBER',
          identification: '987654321',
        },
      ],
      accountBalances: [
        {
          type: 'ACTUAL',
          dateTime: '2024-03-16T12:00:00Z',
          balanceAmount: {
            amount: 2300.75,
            currency: 'USD',
          },
          creditLineIncluded: false,
          creditLines: [],
        },
      ],
    },
    {
      id: '700004000000000000000004',
      type: 'Business - Checking',
      balance: 15000.45,
      currency: 'EUR',
      usageType: 'Business',
      accountType: 'Checking',
      nickname: 'Business Checking',
      accountNames: [
        {
          name: 'ABC Corp',
        },
      ],
      accountIdentifications: [
        {
          type: 'SWIFT_CODE',
          identification: 'ABCDEFFG',
        },
        {
          type: 'IBAN',
          identification: 'DE12345678901234567890',
        },
      ],
      accountBalances: [
        {
          type: 'EXPECTED',
          dateTime: '2024-03-16T12:00:00Z',
          balanceAmount: {
            amount: 15000.45,
            currency: 'EUR',
          },
          creditLineIncluded: false,
          creditLines: [],
        },
      ],
    },
    {
      id: '700004000000000000000005',
      type: 'Personal - Investment',
      balance: 50000.0,
      currency: 'CAD',
      usageType: 'Personal',
      accountType: 'Investment',
      nickname: 'Investment Portfolio',
      accountNames: [
        {
          name: 'Jane Smith',
        },
      ],
      accountIdentifications: [
        {
          type: 'BANK_NUMBER',
          identification: '12345',
        },
        {
          type: 'ACCOUNT_NUMBER',
          identification: '67890',
        },
      ],
      accountBalances: [
        {
          type: 'ACTUAL',
          dateTime: '2024-03-16T12:00:00Z',
          balanceAmount: {
            amount: 50000.0,
            currency: 'CAD',
          },
          creditLineIncluded: false,
          creditLines: [],
        },
      ],
    },
  ];

  async getAccountsAndBalances(userId: string) {
    // const consentToken = await this.getConsentToken(userId);
    // const res: AccountApiListResponse = await axios(
    //   `https://api.yapily.com/accounts`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       consent: consentToken,
    //       'psu-id': 'string',
    //       'psu-corporate-id': 'string',
    //       'psu-ip-address': 'string',
    //       Authorization: 'Basic ' + btoa('<username>:<password>'),
    //     },
    //   },
    // );

    // Mocked + Typesafe Data From Yapily
    return new AccountsAndBalancesDto({
      accounts: this.demoAccountsAndBalances.map((account) => {
        return new AccountAndBalanceDto({
          id: account.id,
          type: account.type,
          balance: account.balance,
          currency: account.currency,
          usageType: UsageType.Personal,
          accountType: AccountType.CashTrading,
          nickname: account.nickname,
          accountNames: account.accountNames,
          accountIdentifications: account.accountIdentifications,
          accountBalances: account.accountBalances.map((balance) => {
            return new AccountBalanceDto({
              dateTime: new Date(balance.dateTime),
              balanceAmount: balance.balanceAmount,
              creditLineIncluded: balance.creditLineIncluded,
              creditLines: balance.creditLines,
            });
          }),
          description: account.type,
          details: account.type,
        });
      }),
    });
  }
}
