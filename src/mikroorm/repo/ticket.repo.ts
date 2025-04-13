import { Injectable } from '@nestjs/common';
import { Ticket } from '../entities/Ticket';
import { BaseRepo } from './base.repo';

@Injectable()
export class TicketRepository extends BaseRepo<Ticket> {
  get populateKeys() {
    return [];
  }

  get entityName() {
    return Ticket;
  }
}
