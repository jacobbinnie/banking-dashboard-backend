import { Dto } from 'src/lib/dto/Dto';

export class PublicUserDto extends Dto<PublicUserDto> {
  id: string;
  email: string;
  name: string;
}
