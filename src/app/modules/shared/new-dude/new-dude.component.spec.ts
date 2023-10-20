import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDudeComponent } from './new-dude.component';

describe('NewDudeComponent', () => {
  let component: NewDudeComponent;
  let fixture: ComponentFixture<NewDudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDudeComponent]
    });
    fixture = TestBed.createComponent(NewDudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
