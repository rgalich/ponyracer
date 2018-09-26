import { PonyModel, PonyWithPositionModel } from './pony.model';

export interface RaceModel {
  id: number;
  name: string;
  ponies: Array<PonyModel>;
  startInstant: string;
  betPonyId?: number;
  status?: 'PENDING' | 'RUNNING' | 'FINISHED';
}

export interface LiveRaceModel extends RaceModel {
  ponies: Array<PonyWithPositionModel>;
}


