import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDudeComponent } from './another-dude.component';

describe('AnotherDudeComponent', () => {
  let component: AnotherDudeComponent;
  let fixture: ComponentFixture<AnotherDudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherDudeComponent]
    });
    fixture = TestBed.createComponent(AnotherDudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
