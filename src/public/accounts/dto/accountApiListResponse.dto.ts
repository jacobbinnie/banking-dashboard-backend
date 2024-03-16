import { Dto } from 'src/lib/dto/Dto';
import { AccountApiListResponse } from 'src/types';

export class AccountApiListDto extends Dto<AccountApiListDto> {
  data: AccountApiListResponse;
}
