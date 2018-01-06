import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittravellerComponent } from './edittraveller.component';

describe('EdittravellerComponent', () => {
  let component: EdittravellerComponent;
  let fixture: ComponentFixture<EdittravellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittravellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
