import { IsNumber } from 'class-validator';
import { Dto } from 'src/lib/dto/Dto';

export class TotalRunwayDto extends Dto<TotalRunwayDto> {
  @IsNumber()
  totalRunway: number;

  @IsNumber()
  monthlyBurn: number;

  @IsNumber()
  monthlyIncoming: number;

  @IsNumber()
  monthlyOutgoing: number;

  @IsNumber()
  currentBalance: number;
}
