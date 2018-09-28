import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

import { AppModule } from '../app.module';
import { RacesComponent } from './races.component';
import { AppComponent } from '../app.component';
import { LoggedInGuard } from '../logged-in.guard';
import { PendingRacesComponent } from './pending-races/pending-races.component';
import { RacesResolverService } from '../races-resolver.service';
import { FinishedRacesComponent } from './finished-races/finished-races.component';

describe('RacesComponent', () => {

  let appComponentFixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    });

    const loggedInGuard: LoggedInGuard = TestBed.get(LoggedInGuard);
    spyOn(loggedInGuard, 'canActivate').and.returnValue(true);

    const racesResolver: RacesResolverService = TestBed.get(RacesResolverService);
    spyOn(racesResolver, 'resolve').and.returnValue([]);

    appComponentFixture = TestBed.createComponent(AppComponent);
    appComponentFixture.detectChanges();
  });

  it('should redirect from /races to /races/pending', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races');

    tick();

    const location: Location = TestBed.get(Location);
    expect(location.path()).toBe('/races/pending', 'You should redirect from /races to /races/pending');
  }));

  it('should show two tabs', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races');

    tick();
    appComponentFixture.detectChanges();

    const racesComponent = appComponentFixture.debugElement.query(By.directive(RacesComponent));

    const tabLinks = racesComponent.nativeElement.querySelectorAll('.nav.nav-tabs .nav-item a.nav-link');
    expect(tabLinks.length).toBe(2, 'You should have two tabs, one for pending races, one for the finished races');
    expect(tabLinks[0].href).toContain('/races/pending');
    expect(tabLinks[1].href).toContain('/races/finished');
  }));

  it('should have a router outlet', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races');

    tick();

    const racesComponent = appComponentFixture.debugElement.query(By.directive(RacesComponent));
    const outlet = racesComponent.query(By.directive(RouterOutlet));

    expect(outlet).not.toBeNull('You must have a router-outlet in your template');
  }));

  it('should have make first tab active when showing pending operations', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races');

    tick();
    appComponentFixture.detectChanges();
    tick();

    const racesComponent = appComponentFixture.debugElement.query(By.directive(RacesComponent));
    const links = racesComponent.nativeElement.querySelectorAll('a.nav-link');
    expect(links.length).toBe(2, 'You must have two links');
    expect(links[0].className.split(' ')).toContain('active', 'The first link should be active');
    expect(links[1].className.split(' ')).not.toContain('active', 'The second link should not be active');
  }));

  it('should have make second tab active when showing finished operations', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races/finished');

    tick();
    appComponentFixture.detectChanges();
    tick();

    const racesComponent = appComponentFixture.debugElement.query(By.directive(RacesComponent));
    const links = racesComponent.nativeElement.querySelectorAll('a.nav-link');
    expect(links.length).toBe(2, 'You must have two links');
    expect(links[0].className.split(' ')).not.toContain('active', 'The first link should not be active');
    expect(links[1].className.split(' ')).toContain('active', 'The second link should be active');
  }));

  it('should display pending operations in first tab', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races');

    tick();

    const pendingRacesComponent = appComponentFixture.debugElement.query(By.directive(PendingRacesComponent));
    const finishedRacesComponent = appComponentFixture.debugElement.query(By.directive(FinishedRacesComponent));

    expect(pendingRacesComponent).not.toBeNull('The router should display the PendingRacesComponent in the first tab for /races');
    expect(finishedRacesComponent).toBeNull('The router should not display the FinishedRacesComponent for /races');
  }));

  it('should display finished operations in second tab', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races/finished');

    tick();

    const pendingRacesComponent = appComponentFixture.debugElement.query(By.directive(PendingRacesComponent));
    const finishedRacesComponent = appComponentFixture.debugElement.query(By.directive(FinishedRacesComponent));

    expect(pendingRacesComponent).toBeNull('The router should not display the PendingRacesComponent for /races/finished');
    expect(finishedRacesComponent).not.toBeNull('The router should display the FinishedRacesComponent for /races/finished');
  }));

  it('should navigate when clicking on second tab', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races');

    tick();
    appComponentFixture.detectChanges();

    const racesComponent = appComponentFixture.debugElement.query(By.directive(RacesComponent));
    racesComponent.nativeElement.querySelectorAll('a')[1].click();

    tick();
    appComponentFixture.detectChanges();

    const location: Location = TestBed.get(Location);

    expect(location.path()).toBe('/races/finished', 'You must navigate to /races/finished when clicking on the second tab');
  }));

  it('should navigate when clicking on second tab', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    router.navigateByUrl('/races/finished');

    tick();
    appComponentFixture.detectChanges();

    const racesComponent = appComponentFixture.debugElement.query(By.directive(RacesComponent));
    racesComponent.nativeElement.querySelectorAll('a')[0].click();

    tick();
    appComponentFixture.detectChanges();

    const location: Location = TestBed.get(Location);

    expect(location.path()).toBe('/races/pending', 'You must navigate to /races/pending when clicking on the first tab');
  }));
});
