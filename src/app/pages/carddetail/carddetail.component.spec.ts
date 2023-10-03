import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddetailComponent } from './carddetail.component';

describe('CarddetailComponent', () => {
  let component: CarddetailComponent;
  let fixture: ComponentFixture<CarddetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarddetailComponent]
    });
    fixture = TestBed.createComponent(CarddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
