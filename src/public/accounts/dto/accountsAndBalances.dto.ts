import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';
import { Institution } from 'src/types/dist';
import {
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

export class CountriesDto extends Dto<CountriesDto> {
  @ApiProperty()
  @IsString()
  displayName: string;

  @ApiProperty()
  @IsString()
  countryCode2: string;
}

export class MediaDto extends Dto<MediaDto> {
  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty()
  @IsString()
  type: string;
}

export class InstitutionDto extends Dto<InstitutionDto> {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  fullName?: string;

  @ApiProperty()
  environmentType?: string;

  @ApiProperty()
  credentialsType?: string;

  @ApiProperty({ type: CountriesDto, isArray: true })
  countries?: CountriesDto[];

  @ApiProperty({ type: MediaDto, isArray: true })
  media?: MediaDto[];

  @ApiProperty()
  features?: string[];

  @ApiProperty()
  monitoring?: { [key: string]: string };
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

  @ApiProperty({ type: InstitutionDto })
  institution: InstitutionDto;
}

export class AccountsAndBalancesDto extends Dto<AccountsAndBalancesDto> {
  @ApiProperty({ type: () => [AccountAndBalanceDto] })
  accounts: AccountAndBalanceDto[];
}
