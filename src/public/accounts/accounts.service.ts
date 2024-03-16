import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import YapilyApi from '../../types/dist';

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
    const consentToken = await this.getConsentToken(userId);

    const resp = await fetch(`https://api.yapily.com/accounts`, {
      method: 'GET',
      headers: {
        consent: consentToken,
        'psu-id': 'string',
        'psu-corporate-id': 'string',
        'psu-ip-address': 'string',
        Authorization: 'Basic ' + btoa('<username>:<password>'),
      },
    });

    const data = await resp.text();
  }
}
