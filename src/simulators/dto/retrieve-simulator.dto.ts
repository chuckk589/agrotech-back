import { Simulator } from '../../mikroorm/entities/Simulator';
import { RetrieveVersionDto } from '../../versions/dto/retrieve-version.dto';

export class RetrieveSimulatorDto {
  constructor(simulator: Simulator) {
    this.id = simulator.id;
    this.label = simulator.label;
    this.firstName = simulator.firstName;
    this.secondName = simulator.secondName;
    this.description = simulator.description;
    this.productNumber = simulator.productNumber;
    this.featureNumber = simulator.featureNumber;
    this.icon = simulator.icon;
    this.mainImage = simulator.mainImage;
    this.isFree = simulator.isFree;
    this.eduSim = simulator.eduSim;
    this.versions = simulator.versions.map((version) => new RetrieveVersionDto(version));
    this.images = simulator.images;
    this.lastVersion = this.versions[0]?.versionStr;
  }
  id: number;
  label: string;
  firstName: string;
  secondName: string;
  description: string;
  productNumber: number;
  featureNumber: number;
  icon: string;
  mainImage: string;
  isFree: boolean;
  eduSim: boolean;
  versions: RetrieveVersionDto[];
  images: string[];
  lastVersion: string;
}
