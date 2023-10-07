import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecardComponent } from './updatecard.component';

describe('UpdatecardComponent', () => {
  let component: UpdatecardComponent;
  let fixture: ComponentFixture<UpdatecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecardComponent]
    });
    fixture = TestBed.createComponent(UpdatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
