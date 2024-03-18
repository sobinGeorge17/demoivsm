import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedshomeComponent } from './feedshome.component';

describe('FeedshomeComponent', () => {
  let component: FeedshomeComponent;
  let fixture: ComponentFixture<FeedshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
