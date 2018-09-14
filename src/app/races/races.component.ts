import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor(private raceService: RaceService) { }

  races: Array<RaceModel>;

  ngOnInit() {
    this.raceService.list().subscribe((response) => this.races = response);
  }

}
