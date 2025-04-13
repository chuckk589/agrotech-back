import { Injectable } from '@nestjs/common';
import { Multer } from 'multer';
import { Ticket } from 'src/mikroorm/entities/Ticket';
import { TicketRepository } from 'src/mikroorm/repo/ticket.repo';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private readonly ticketRepo: TicketRepository) {}

  async create(createTicketDto: CreateTicketDto, file?: Multer.File) {
    const ticket = new Ticket();
    ticket.applicant = createTicketDto.name;
    ticket.subject = createTicketDto.subject;

    if (file) {
      ticket.attachments = [file.filename];
    }

    ticket.contacts = createTicketDto.contacts;

    return await this.ticketRepo.save(ticket);
  }
}
