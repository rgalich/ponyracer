import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) {}

  list(): Observable<Array<RaceModel>> {
    const params = { status: 'PENDING' };
    return this.http.get<Array<RaceModel>>('http://ponyracer.ninja-squad.com/api/races', { params });
  }

  bet(raceId: number, ponyId: number): Observable<RaceModel> {
    return this.http.post<RaceModel>(`http://ponyracer.ninja-squad.com/api/races/${raceId}/bets`, { ponyId });
  }

  get(raceId: number): Observable<RaceModel> {
    return this.http.get<RaceModel>(`http://ponyracer.ninja-squad.com/api/races/${raceId}`);
  }

  cancelBet(raceId: number): Observable<void> {
    return this.http.delete<void>(`http://ponyracer.ninja-squad.com/api/races/${raceId}/bets`);
  }

}
