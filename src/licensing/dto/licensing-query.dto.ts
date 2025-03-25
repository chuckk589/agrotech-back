import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class LicensingQueryDto {
  @IsOptional()
  @ApiProperty({ required: false })
  os?: string;
}
