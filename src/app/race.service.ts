import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  list() {
    return of([
      {name: 'Lyon'},
      {name: 'Los Angeles'},
      {name: 'Sydney'},
      {name: 'Tokyo'},
      {name: 'Casablanca'}
    ]).pipe(delay(500));
  }
}
