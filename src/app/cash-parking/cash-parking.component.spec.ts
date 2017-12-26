import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashParkingComponent } from './cash-parking.component';

describe('CashParkingComponent', () => {
  let component: CashParkingComponent;
  let fixture: ComponentFixture<CashParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
