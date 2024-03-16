import { Dto } from 'src/lib/dto/Dto';

export class VerifyConnectDto extends Dto<VerifyConnectDto> {
  authCode: string;
  authState: string;
}
