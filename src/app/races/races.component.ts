import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor(private raceService: RaceService) { }

  races: RaceModel[] = [];

  ngOnInit() {
    this.races = this.raceService.list();
  }

}
