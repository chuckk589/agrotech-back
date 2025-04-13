import { NewsType } from 'src/mikroorm/entities/News';

export type RetrieveNewsQuery = {
  limit?: number;
  type?: NewsType;
  //in days
  range?: number;
};
