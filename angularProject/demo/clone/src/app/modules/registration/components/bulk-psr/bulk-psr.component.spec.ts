import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkPsrComponent } from './bulk-psr.component';

describe('BulkPsrComponent', () => {
  let component: BulkPsrComponent;
  let fixture: ComponentFixture<BulkPsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulkPsrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulkPsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
