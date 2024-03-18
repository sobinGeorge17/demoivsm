import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrnCreationComponent } from './srn-creation.component';

describe('SrnCreationComponent', () => {
  let component: SrnCreationComponent;
  let fixture: ComponentFixture<SrnCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrnCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SrnCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
