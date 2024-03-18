import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOdersDetailsComponent } from './work-oders-details.component';

describe('WorkOdersDetailsComponent', () => {
  let component: WorkOdersDetailsComponent;
  let fixture: ComponentFixture<WorkOdersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOdersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkOdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
