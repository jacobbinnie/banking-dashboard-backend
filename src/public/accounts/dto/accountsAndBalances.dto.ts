import { ApiProperty } from '@nestjs/swagger';
import { Dto } from 'src/lib/dto/Dto';
import {
  AccountBalance,
  AccountIdentification,
  AccountName,
  AccountType,
  ConsolidatedAccountInformation,
  UsageType,
} from 'src/types/index';

export class CreditLineDto extends Dto<CreditLineDto> {
  @ApiProperty()
  included?: boolean;

  @ApiProperty()
  amount?: number;

  @ApiProperty()
  currency?: string;
}

export class BalanceAmountDto extends Dto<BalanceAmountDto> {
  @ApiProperty()
  amount?: number;

  @ApiProperty()
  currency?: string;
}

export class AccountBalanceDto extends Dto<AccountBalanceDto> {
  @ApiProperty()
  type?: string;

  @ApiProperty()
  dateTime?: Date;

  @ApiProperty({ type: BalanceAmountDto })
  balanceAmount?: BalanceAmountDto;

  @ApiProperty()
  creditLineIncluded?: boolean;

  @ApiProperty({ type: CreditLineDto, isArray: true })
  creditLines?: CreditLineDto[];
}

export class AccountIdentificationDto extends Dto<AccountIdentificationDto> {
  @ApiProperty()
  type?: string;

  @ApiProperty()
  identification?: string;
}

export class AccountAndBalanceDto extends Dto<AccountAndBalanceDto> {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  type?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  balance?: number;

  @ApiProperty()
  currency?: string;

  @ApiProperty({ type: 'enum', enum: UsageType, default: UsageType.Personal })
  usageType?: UsageType;

  @ApiProperty({
    type: 'enum',
    enum: AccountType,
    default: AccountType.CashTrading,
  })
  accountType?: AccountType;

  @ApiProperty({ type: () => [AccountIdentificationDto] })
  accountIdentifications?: AccountIdentificationDto[];

  @ApiProperty()
  nickname?: string;

  @ApiProperty()
  details?: string;

  @ApiProperty({ type: () => [AccountName] })
  accountNames?: AccountName[];

  @ApiProperty({ type: AccountBalanceDto, isArray: true })
  accountBalances?: AccountBalanceDto[];

  @ApiProperty()
  consolidatedAccountInformation?: ConsolidatedAccountInformation;
}

export class AccountsAndBalancesDto extends Dto<AccountsAndBalancesDto> {
  @ApiProperty({ type: () => [AccountAndBalanceDto] })
  accounts: AccountAndBalanceDto[];
}
