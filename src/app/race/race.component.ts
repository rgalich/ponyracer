import { Component, OnInit, Input } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Input() raceModel: RaceModel;

  ponyClicked(pony: PonyModel) {

  }

  constructor() { }

  ngOnInit() {
  }

}
