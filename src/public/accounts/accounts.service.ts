import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import {
  AccountAndBalanceDto,
  AccountBalanceDto,
  AccountsAndBalancesDto,
} from './dto/accountsAndBalances.dto';
import { AccountType, TransactionStatusEnum, UsageType } from 'src/types/index';
import {
  AccountTransactionDto,
  AccountTransactionsDto,
} from './dto/accountTransactions.dto';

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
    console.log(applicationUserId, institutionId);
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
    console.log(userId, authCode, authState);
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
    console.log(userId);
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

  demoAccountTransactions = [
    {
      id: '49d6e5c6-0130-46e3-884b-1b185432d9e0',
      date: '2024-03-01T17:44:34.589Z',
      bookingDateTime: '2024-03-01T17:44:34.589Z',
      valueDateTime: '2024-03-01T17:44:34.589Z',
      status: TransactionStatusEnum.Booked,
      amount: -50.23,
      currency: 'GBP',
      transactionAmount: {
        amount: -50.23,
        currency: 'GBP',
      },
      reference: '0',
      description:
        'Debit for Payment Id: sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60',
      transactionInformation: [
        'Debit for Payment Id: sdp-1-57379a43-c4b8-49f5-bd7c-699189ee7a60',
      ],
      isoBankTransactionCode: {
        domainCode: {
          code: 'PMNT',
          name: 'Payments',
        },
        familyCode: {
          code: 'ICDT',
          name: 'Issued Credit Transfers',
        },
        subFamilyCode: {
          code: 'DMCT',
          name: 'Domestic Credit Transfer',
        },
      },
      proprietaryBankTransactionCode: {
        code: 'PMT',
        issuer: 'modelo-sandbox',
      },
      balance: {
        type: 'CLOSING_AVAILABLE',
        balanceAmount: {
          amount: 1426530.0,
          currency: 'GBP',
        },
      },
      enrichment: {
        transactionHash: {
          hash: 'adad72d7b3069ab9e4a6cb2844e2e3e9.1',
        },
      },
    },
    {
      id: 'e3f532f9-41d4-45c7-8be3-6829320d9d25',
      date: '2024-03-05T09:20:50.123Z',
      bookingDateTime: '2024-03-05T09:20:50.123Z',
      valueDateTime: '2024-03-05T09:20:50.123Z',
      status: TransactionStatusEnum.Booked,
      amount: 35.6,
      currency: 'USD',
      transactionAmount: {
        amount: 35.6,
        currency: 'USD',
      },
      reference: '123456',
      description: 'Credit for Sale',
      transactionInformation: ['Credit for Sale'],
      isoBankTransactionCode: {
        domainCode: {
          code: 'SALE',
          name: 'Sales',
        },
        familyCode: {
          code: 'CRDT',
          name: 'Credit Transfers',
        },
        subFamilyCode: {
          code: 'ONLN',
          name: 'Online Sale',
        },
      },
      proprietaryBankTransactionCode: {
        code: 'CRS',
        issuer: 'sandbox-bank',
      },
      balance: {
        type: 'CLOSING_AVAILABLE',
        balanceAmount: {
          amount: 1900250.0,
          currency: 'USD',
        },
      },
      enrichment: {
        transactionHash: {
          hash: 'b7a32fc0155fbc2386bc36ed16809d3a',
        },
      },
    },
    {
      id: '03e9f86b-f3f8-4f3a-8d45-9ff3f7d6c8a2',
      date: '2024-03-10T14:37:01.789Z',
      bookingDateTime: '2024-03-10T14:37:01.789Z',
      valueDateTime: '2024-03-10T14:37:01.789Z',
      status: TransactionStatusEnum.Booked,
      amount: -20.99,
      currency: 'EUR',
      transactionAmount: {
        amount: -20.99,
        currency: 'EUR',
      },
      reference: '789012',
      description: 'Debit for Service Charge',
      transactionInformation: ['Debit for Service Charge'],
      isoBankTransactionCode: {
        domainCode: {
          code: 'SRVC',
          name: 'Service',
        },
        familyCode: {
          code: 'DBIT',
          name: 'Debit Transfers',
        },
        subFamilyCode: {
          code: 'CHRG',
          name: 'Charge',
        },
      },
      proprietaryBankTransactionCode: {
        code: 'SRV',
        issuer: 'sandbox-bank',
      },
      balance: {
        type: 'CLOSING_AVAILABLE',
        balanceAmount: {
          amount: 35076.0,
          currency: 'EUR',
        },
      },
      enrichment: {
        transactionHash: {
          hash: '9a7c83ecda68e6b4f9163f1f3e1c4378',
        },
      },
    },
    {
      id: '1c5e9c7a-e8d7-4c7b-b7ac-6f26e7c0fc2a',
      date: '2024-03-20T18:55:23.456Z',
      bookingDateTime: '2024-03-20T18:55:23.456Z',
      valueDateTime: '2024-03-20T18:55:23.456Z',
      status: TransactionStatusEnum.Booked,
      amount: 40.35,
      currency: 'GBP',
      transactionAmount: {
        amount: 40.35,
        currency: 'GBP',
      },
      reference: '567890',
      description: 'Credit for Refund',
      transactionInformation: ['Credit for Refund'],
      isoBankTransactionCode: {
        domainCode: {
          code: 'RFND',
          name: 'Refund',
        },
        familyCode: {
          code: 'CRDT',
          name: 'Credit Transfers',
        },
        subFamilyCode: {
          code: 'RTRN',
          name: 'Return',
        },
      },
      proprietaryBankTransactionCode: {
        code: 'CRF',
        issuer: 'sandbox-bank',
      },
      balance: {
        type: 'CLOSING_AVAILABLE',
        balanceAmount: {
          amount: 35076.0,
          currency: 'EUR',
        },
      },
      enrichment: {
        transactionHash: {
          hash: '9a7c83ecda68e6b4f9163f1f3e1c4378',
        },
      },
    },
  ];

  async getAccountTransactions(userId: string, accountId: string) {
    console.log(userId, accountId);
    // const consentToken = await this.getConsentToken(userId);
    // const resp = await fetch(
    //   `https://api.yapily.com/accounts/${accountId}/transactions`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       consent: consentId,
    //       'psu-id': 'string',
    //       'psu-corporate-id': 'string',
    //       'psu-ip-address': 'string',
    //       Authorization: 'Basic ' + btoa('<username>:<password>'),
    //     },
    //   },
    // );

    return new AccountTransactionsDto({
      transactions: this.demoAccountTransactions.map((transaction) => {
        return new AccountTransactionDto({
          id: transaction.id,
          date: new Date(transaction.date),
          bookingDateTime: new Date(transaction.bookingDateTime),
          valueDateTime: new Date(transaction.valueDateTime),
          status: transaction.status,
          amount: transaction.amount,
          currency: transaction.currency,
          transactionAmount: transaction.transactionAmount,
          reference: transaction.reference,
          description: transaction.description,
          transactionInformation: transaction.transactionInformation,
          isoBankTransactionCode: transaction.isoBankTransactionCode,
          proprietaryBankTransactionCode:
            transaction.proprietaryBankTransactionCode,
          balance: {
            amount: transaction.balance.balanceAmount.amount,
            currency: transaction.balance.balanceAmount.currency,
          },
          enrichment: transaction.enrichment,
        });
      }),
    });
  }

  async getMonthlyOutgoingTransactions(userId: string) {
    const accountsAndBalances = await this.getAccountsAndBalances(userId);

    // Due to the hardcoded mock data, transactions will be duplicated. In a real world scenario, we would retrieve transactions per account individually.
    const allTransactions = await Promise.all(
      accountsAndBalances.accounts.map((account) =>
        this.getAccountTransactions(userId, account.id),
      ),
    );
    const combinedTransactions = allTransactions.flatMap(
      (accountTransactions) => accountTransactions.transactions,
    );

    const outgoingTransactions = combinedTransactions.filter(
      (transaction) => transaction.amount < 0,
    );

    const lastMonthOutgoingTransactions = outgoingTransactions.filter(
      (transaction) =>
        transaction.date.getTime() >
        new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime(),
    );

    return new AccountTransactionsDto({
      transactions: lastMonthOutgoingTransactions,
    });
  }

  async getMonthlyIncomingTransactions(userId: string) {
    const accountsAndBalances = await this.getAccountsAndBalances(userId);

    // Due to the hardcoded mock data, transactions will be duplicated. In a real world scenario, we would retrieve transactions per account individually.
    const allTransactions = await Promise.all(
      accountsAndBalances.accounts.map((account) =>
        this.getAccountTransactions(userId, account.id),
      ),
    );
    const combinedTransactions = allTransactions.flatMap(
      (accountTransactions) => accountTransactions.transactions,
    );

    const incomingTransactions = combinedTransactions.filter(
      (transaction) => transaction.amount > 0,
    );

    const lastMonthIncomingTransactions = incomingTransactions.filter(
      (transaction) =>
        transaction.date.getTime() >
        new Date(new Date().setMonth(new Date().getMonth() - 1)).getTime(),
    );

    return new AccountTransactionsDto({
      transactions: lastMonthIncomingTransactions,
    });
  }
}
