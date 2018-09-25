import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';

import { RaceModel } from './models/race.model';
import { map, take } from 'rxjs/operators';
import { PonyWithPositionModel } from './models/pony.model';

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

  live(raceId: number): Observable<Array<PonyWithPositionModel>> {
    const positions = interval(1000);
    return positions.pipe(
                      take(101),
                      map(position => {
                        return [{
                          id: 1,
                          name: 'Superb Runner',
                          color: 'BLUE',
                          position
                        }, {
                          id: 2,
                          name: 'Awesome Fridge',
                          color: 'GREEN',
                          position
                        }, {
                          id: 3,
                          name: 'Great Bottle',
                          color: 'ORANGE',
                          position
                        }, {
                          id: 4,
                          name: 'Little Flower',
                          color: 'YELLOW',
                          position
                        }, {
                          id: 5,
                          name: 'Nice Rock',
                          color: 'PURPLE',
                          position
                        }];
                      })
                    );
  }

}
