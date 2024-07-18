import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlayCasinoGamesComponent } from './how-to-play-casino-games.component';

describe('HowToPlayCasinoGamesComponent', () => {
  let component: HowToPlayCasinoGamesComponent;
  let fixture: ComponentFixture<HowToPlayCasinoGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToPlayCasinoGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToPlayCasinoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
