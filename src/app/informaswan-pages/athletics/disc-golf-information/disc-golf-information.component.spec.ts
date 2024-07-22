import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscGolfInformationComponent } from './disc-golf-information.component';

describe('DiscGolfInformationComponent', () => {
  let component: DiscGolfInformationComponent;
  let fixture: ComponentFixture<DiscGolfInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscGolfInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscGolfInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
