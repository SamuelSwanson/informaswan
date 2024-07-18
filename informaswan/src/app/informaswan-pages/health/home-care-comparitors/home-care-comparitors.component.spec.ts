import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCareComparitorsComponent } from './home-care-comparitors.component';

describe('HomeCareComparitorsComponent', () => {
  let component: HomeCareComparitorsComponent;
  let fixture: ComponentFixture<HomeCareComparitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCareComparitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCareComparitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
