import { Injectable } from '@nestjs/common';
import { SimulatorRepository } from 'src/mikroorm/repo';
import { OS } from 'src/mikroorm/types/enums';
import { RetrieveSimulatorDto } from './dto/retrieve-simulator.dto';

@Injectable()
export class SimulatorsService {
  constructor(private readonly simulatorRepository: SimulatorRepository) {}
  // async findOne(id: number, os: string) {
  //   const simulator = await this.simulatorRepository.findById(id, true);
  //   return new RetrieveSimulatorDto(simulator);
  // }
  async findAll(os: string) {
    const simulators = await this.simulatorRepository.findAllFiltered({ os: this.decomposeOs(os) }, true);

    return simulators.map((simulator) => new RetrieveSimulatorDto(simulator));
  }

  private decomposeOs(os: string): OS {
    if (os.toLowerCase().includes('win')) {
      return OS.WIN;
    } else {
      return OS.LINUX;
    }
  }
}
