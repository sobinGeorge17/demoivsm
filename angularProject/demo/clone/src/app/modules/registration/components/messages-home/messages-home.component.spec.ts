import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesHomeComponent } from './messages-home.component';

describe('MessagesHomeComponent', () => {
  let component: MessagesHomeComponent;
  let fixture: ComponentFixture<MessagesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
