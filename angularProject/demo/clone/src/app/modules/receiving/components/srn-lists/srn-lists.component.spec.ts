import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrnListsComponent } from './srn-lists.component';

describe('SrnListsComponent', () => {
  let component: SrnListsComponent;
  let fixture: ComponentFixture<SrnListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrnListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SrnListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
