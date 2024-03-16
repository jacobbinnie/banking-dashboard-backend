import { Dto } from 'src/lib/dto/Dto';

export class InitiateConnectDto extends Dto<InitiateConnectDto> {
  applicationUserId: string;
  institutionId: string;
}
