import { ApiProperty } from '@nestjs/swagger';
import { Dto } from 'src/lib/dto/Dto';
import {
  TransactionPayerDetails,
  Enrichment,
  Merchant,
  TransactionPayeeDetails,
  ProprietaryBankTransactionCode,
  AddressDetails,
  TransactionChargeDetails,
  IsoBankTransactionCode,
  StatementReference,
  CurrencyExchange,
  Amount,
  TransactionStatusEnum,
} from 'src/types/index';

export class TransactionBalanceDto extends Dto<TransactionBalanceDto> {
  @ApiProperty()
  amount?: number;

  @ApiProperty()
  currency?: string;
}

export class AccountTransactionDto extends Dto<AccountTransactionDto> {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  date?: Date;

  @ApiProperty()
  bookingDateTime?: Date;

  @ApiProperty()
  valueDateTime?: Date;

  @ApiProperty({
    enum: TransactionStatusEnum,
    default: TransactionStatusEnum.Booked,
  })
  status?: TransactionStatusEnum;

  @ApiProperty()
  amount?: number;

  @ApiProperty()
  currency?: string;

  @ApiProperty({ type: Amount })
  transactionAmount?: Amount;

  @ApiProperty({ type: Amount })
  grossAmount?: Amount;

  @ApiProperty({ type: CurrencyExchange })
  currencyExchange?: CurrencyExchange;

  @ApiProperty({ type: TransactionChargeDetails })
  chargeDetails?: TransactionChargeDetails;

  @ApiProperty()
  reference?: string;

  @ApiProperty({ type: [StatementReference] })
  statementReferences?: StatementReference[];

  @ApiProperty()
  description?: string;

  @ApiProperty({ type: [String] })
  transactionInformation?: string[];

  @ApiProperty({ type: AddressDetails })
  addressDetails?: AddressDetails;

  @ApiProperty({ type: IsoBankTransactionCode })
  isoBankTransactionCode?: IsoBankTransactionCode;

  @ApiProperty({ type: ProprietaryBankTransactionCode })
  proprietaryBankTransactionCode?: ProprietaryBankTransactionCode;

  @ApiProperty({ type: TransactionBalanceDto })
  balance?: TransactionBalanceDto;

  @ApiProperty({ type: TransactionPayeeDetails })
  payeeDetails?: TransactionPayeeDetails;

  @ApiProperty({ type: TransactionPayerDetails })
  payerDetails?: TransactionPayerDetails;

  @ApiProperty({ type: Merchant })
  merchant?: Merchant;

  @ApiProperty({ type: Enrichment })
  enrichment?: Enrichment;

  @ApiProperty()
  supplementaryData?: any;

  @ApiProperty()
  transactionMutability?: string;
}

export class AccountTransactionsDto extends Dto<AccountTransactionsDto> {
  @ApiProperty({ type: [AccountTransactionDto] })
  transactions: AccountTransactionDto[];
}
