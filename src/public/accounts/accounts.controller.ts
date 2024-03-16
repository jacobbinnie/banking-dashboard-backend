import { Body, Controller, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiTags } from '@nestjs/swagger';
import { InitiateConnectDto } from './dto/initiateConnect.dto';
import { VerifyConnectDto } from './dto/verifyConnect.dto';
import { AccountsAndBalancesDto } from './dto/accountsAndBalances.dto';
import { AccountTransactionsDto } from './dto/accountTransactions.dto';
import { TotalRunwayDto } from './dto/totalRunway.dto';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // I would always have some sort of bearer guard in a real world case.
  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  @Post('initiateConnectAccount')
  async initiateConnectAccount(
    @Body()
    { applicationUserId, institutionId }: InitiateConnectDto,
  ): Promise<string> {
    return this.accountsService.initiateConnectAccount(
      applicationUserId,
      institutionId,
    );
  }

  @Post('verifyConnect')
  async verifyConnect(
    @Body()
    { authCode, authState }: VerifyConnectDto,
  ): Promise<void> {
    return this.accountsService.verifyConnect(
      'demoUserId',
      authCode,
      authState,
    );
  }

  @Post('getAccountsAndBalances')
  async getAccountsAndBalances(): Promise<AccountsAndBalancesDto> {
    return this.accountsService.getAccountsAndBalances('demoUserId');
  }

  @Post('getAccountTransactions')
  async getAccountTransactions(
    @Body() { accountId }: { accountId: 'string' },
  ): Promise<AccountTransactionsDto> {
    return this.accountsService.getAccountTransactions('demoUserId', accountId);
  }

  @Post('getAllTransactions')
  async getAllTransactions(): Promise<AccountTransactionsDto> {
    return this.accountsService.getAllTransactions('demoUserId');
  }

  @Post('getMonthlyOutgoingTransactions')
  async getMonthlyOutgoingTransactions(): Promise<AccountTransactionsDto> {
    return this.accountsService.getMonthlyOutgoingTransactions('demoUserId');
  }

  @Post('getMonthlyIncomingTransactions')
  async getMonthlyIncomingTransactions(): Promise<AccountTransactionsDto> {
    return this.accountsService.getMonthlyIncomingTransactions('demoUserId');
  }

  @Post('getTotalRunwayInMonths')
  async getTotalRunwayInMonths(): Promise<TotalRunwayDto> {
    return this.accountsService.getTotalRunwayInMonths('demoUserId');
  }

  @Post('generateAccountReports')
  async generateAccountReports(
    @Body() { accountId }: { accountId: 'string' },
  ): Promise<{
    [key: string]: string;
  }> {
    return this.accountsService.getReportsForAccount('demoUserId', accountId);
  }

  // Could connect the above up to a cron job to run every month and store the data in a database.
  // After generating the reports for an account, you could automatically send out via email to any customers who would be interested
}
