import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { AccountApiListDto } from './dto/accountApiListResponse.dto';
import { AccountBalanceType, AccountType, UsageType } from 'src/types/index';

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
    return new AccountApiListDto({
      data: {
        meta: {
          tracingId: '1139346006be4345a94fd8b3728844e3',
          count: 1,
        },
        data: [
          {
            id: '700004000000000000000002',
            type: 'Personal - Current',
            balance: -12.57,
            currency: 'GBP',
            usageType: UsageType.Personal,
            accountType: AccountType.Charges,
            nickname: 'xxxx0006',
            accountNames: [
              {
                name: 'Mr. John Smith & Mrs. Susan Smith',
              },
            ],
            accountBalances: [
              {
                type: AccountBalanceType.Authorised,
                dateTime: new Date('2024-03-15T00:00:00.000Z'),
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
            type: 'Business - Savings',
            balance: 1287009.0,
            currency: 'USD',
            usageType: UsageType.Business,
            accountType: AccountType.Savings,
            nickname: 'Business Savings',
            accountNames: [
              {
                name: 'ABC Corporation',
              },
            ],
            accountBalances: [
              {
                type: AccountBalanceType.Authorised,
                dateTime: new Date('2024-03-15T00:00:00.000Z'),
                balanceAmount: {
                  amount: 1287009.0,
                  currency: 'USD',
                },
                creditLineIncluded: false,
                creditLines: [],
              },
            ],
          },
          {
            id: '700004000000000000000004',
            type: 'Personal - Checking',
            balance: 5430.0,
            currency: 'EUR',
            usageType: UsageType.Personal,
            accountType: AccountType.CashTrading,
            nickname: 'Personal Checking',
            accountNames: [
              {
                name: 'Jane Doe',
              },
            ],
            accountBalances: [
              {
                type: AccountBalanceType.Authorised,
                dateTime: new Date('2024-03-15T00:00:00.000Z'),
                balanceAmount: {
                  amount: 5430.0,
                  currency: 'EUR',
                },
                creditLineIncluded: false,
                creditLines: [],
              },
            ],
          },
        ],
      },
    });
  }
}
