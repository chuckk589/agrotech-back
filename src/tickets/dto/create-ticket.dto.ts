import { IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  name: '2323';
  @IsString()
  contacts: '2323';
  @IsString()
  subject: '232';
}
