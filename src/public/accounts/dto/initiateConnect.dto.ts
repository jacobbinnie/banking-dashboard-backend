import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class InitiateConnectDto extends Dto<InitiateConnectDto> {
  @ApiProperty()
  @IsString()
  applicationUserId: string;

  @ApiProperty()
  @IsString()
  institutionId: string;
}
