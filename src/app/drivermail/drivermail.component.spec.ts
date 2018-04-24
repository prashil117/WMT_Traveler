import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivermailComponent } from './drivermail.component';

describe('DrivermailComponent', () => {
  let component: DrivermailComponent;
  let fixture: ComponentFixture<DrivermailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivermailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivermailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
