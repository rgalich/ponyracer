import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

import { RaceService } from '../race.service';
import { RaceModel } from '../models/race.model';
import { PonyWithPositionModel } from '../models/pony.model';

@Component({
  selector: 'pr-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  raceModel: RaceModel;
  poniesWithPosition: Array<PonyWithPositionModel> = [];
  positionSubscription: Subscription;
  error: boolean;
  winners: Array<PonyWithPositionModel>;
  betWon: boolean;

  constructor(private raceService: RaceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('raceId');
    this.positionSubscription = this.raceService.get(id).pipe(
      tap((race: RaceModel) => this.raceModel = race),
      filter(race => this.raceModel.status !== 'FINISHED'),
      switchMap(race => this.raceService.live(race.id))
    ).subscribe(
      positions => {
        this.poniesWithPosition = positions;
        this.raceModel.status = 'RUNNING';
      },
      error => this.error = true,
      () => {
        this.raceModel.status = 'FINISHED';
        this.winners = this.poniesWithPosition.filter(pony => pony.position >= 100);
        this.betWon = this.winners.some(pony => pony.id === this.raceModel.betPonyId);
      }
    );
  }

  ngOnDestroy() {
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }
  }

}
