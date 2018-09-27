import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedRacesComponent } from './finished-races.component';

describe('FinishedRacesComponent', () => {
  let component: FinishedRacesComponent;
  let fixture: ComponentFixture<FinishedRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
