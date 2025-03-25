import { Injectable } from '@nestjs/common';
import { SimulatorRepository } from 'src/mikroorm/repo';
import { RetrieveSimulatorDto } from './dto/retrieve-simulator.dto';

@Injectable()
export class SimulatorsService {
  constructor(private readonly simulatorRepository: SimulatorRepository) {}
  async findOne(id: number) {
    const simulator = await this.simulatorRepository.findById(id, true);
    return new RetrieveSimulatorDto(simulator);
  }
  async findAll() {
    const simulators = await this.simulatorRepository.findAll(true);

    return simulators.map((simulator) => new RetrieveSimulatorDto(simulator));
  }
}
