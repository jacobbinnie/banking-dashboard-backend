import { Body, Controller, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiTags } from '@nestjs/swagger';
import { InitiateConnectDto } from './dto/initiateConnect.dto';
import { VerifyConnectDto } from './dto/verifyConnect.dto';
import { AccountsAndBalancesDto } from './dto/accountsAndBalances.dto';
import { AccountTransactionsDto } from './dto/accountTransactions.dto';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // I would always have some sort of bearer guards to ensure only authenticated users are accessing these endpoints
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
  async getAccountTransactions(): Promise<AccountTransactionsDto> {
    return this.accountsService.getAccountTransactions(
      'demoUserId',
      'demoAccountId',
    );
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
  async getTotalRunwayInMonths(): Promise<number> {
    return this.accountsService.getTotalRunwayInMonths('demoUserId');
  }
}
