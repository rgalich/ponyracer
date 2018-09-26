import { Component, OnInit, OnDestroy } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../race.service';
import { PonyWithPositionModel } from '../models/pony.model';
import { Subscription } from 'rxjs';
import { tap, filter, switchMap } from 'rxjs/operators';

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

  constructor(private raceService: RaceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const raceId = +this.activatedRoute.snapshot.paramMap.get('raceId');
    this.positionSubscription = this.raceService.get(raceId).pipe(
        tap(race => this.raceModel = race),
        filter(race => race.status !== 'FINISHED'),
        switchMap(race => this.raceService.live(race.id))
      )
      .subscribe(
        positions => {
          this.poniesWithPosition = positions;
          this.raceModel.status = 'RUNNING';
        },
        () => this.error = true,
        () => {
          this.raceModel.status = 'FINISHED';
          this.winners = this.poniesWithPosition.filter(pony => pony.position >= 100);
          this.betWon = this.winners.some(pony => pony.id === this.raceModel.betPonyId);
        }
      );
  }

  ngOnDestroy() {
    if (this.poniesWithPosition) {
      this.positionSubscription.unsubscribe();
    }
  }

}
