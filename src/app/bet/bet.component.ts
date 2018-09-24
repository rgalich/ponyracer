import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../race.service';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  raceModel: RaceModel;

  constructor(private activatedRoute: ActivatedRoute, private raceService: RaceService) { }

  ngOnInit() {
    const raceId = +this.activatedRoute.snapshot.paramMap.get('raceId');
    if (raceId) {
      this.raceService.get(raceId).subscribe(race => this.raceModel = race);
    }
  }

  betOnPony(pony: PonyModel) {
    this.raceService.bet(this.raceModel.id, pony.id).subscribe(race => this.raceModel = race);
  }

  isPonySelected(pony: PonyModel): boolean {
    return this.raceModel.betPonyId === pony.id;
  }

}
