import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class ManualQueryDto {
  @IsNumberString()
  @ApiProperty({ required: true })
  sim_id?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  os?: string;
}
