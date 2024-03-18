import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOdersListComponent } from './work-oders-list.component';

describe('WorkOdersListComponent', () => {
  let component: WorkOdersListComponent;
  let fixture: ComponentFixture<WorkOdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOdersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkOdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
