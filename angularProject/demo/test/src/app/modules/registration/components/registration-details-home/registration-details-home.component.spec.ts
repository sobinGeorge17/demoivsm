import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetailsHomeComponent } from './registration-details-home.component';

describe('RegistrationDetailsHomeComponent', () => {
  let component: RegistrationDetailsHomeComponent;
  let fixture: ComponentFixture<RegistrationDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationDetailsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
