import { IsNotEmpty, IsNumber } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class TotalRunwayDto extends Dto<TotalRunwayDto> {
  @IsNumber()
  @IsNotEmpty()
  totalRunway: number;

  @IsNumber()
  @IsNotEmpty()
  monthlyBurn: number;

  @IsNumber()
  @IsNotEmpty()
  monthlyIncoming: number;

  @IsNumber()
  @IsNotEmpty()
  monthlyOutgoing: number;

  @IsNumber()
  @IsNotEmpty()
  currentBalance: number;
}
