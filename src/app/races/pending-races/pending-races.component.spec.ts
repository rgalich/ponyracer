import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingRacesComponent } from './pending-races.component';

describe('PendingRacesComponent', () => {
  let component: PendingRacesComponent;
  let fixture: ComponentFixture<PendingRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
