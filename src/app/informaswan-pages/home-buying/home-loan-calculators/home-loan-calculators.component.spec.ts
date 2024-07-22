import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanCalculatorsComponent } from './home-loan-calculators.component';

describe('HomeLoanCalculatorsComponent', () => {
  let component: HomeLoanCalculatorsComponent;
  let fixture: ComponentFixture<HomeLoanCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanCalculatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoanCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
