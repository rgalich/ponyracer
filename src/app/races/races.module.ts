import { FromNowPipe } from './../from-now.pipe';
import { LiveComponent } from './../live/live.component';
import { BetComponent } from './../bet/bet.component';
import { PonyComponent } from './../pony/pony.component';
import { FinishedRacesComponent } from './finished-races/finished-races.component';
import { PendingRacesComponent } from './pending-races/pending-races.component';
import { RaceComponent } from './../race/race.component';
import { RacesComponent } from './races.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RACES_ROUTES } from './races.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RACES_ROUTES)
  ],
  declarations: [
    FromNowPipe,
    LiveComponent,
    BetComponent,
    PonyComponent,
    FinishedRacesComponent,
    PendingRacesComponent,
    RaceComponent,
    RacesComponent
  ]
})
export class RacesModule { }
