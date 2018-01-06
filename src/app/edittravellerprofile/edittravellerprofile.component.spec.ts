import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittravellerprofileComponent } from './edittravellerprofile.component';

describe('EdittravellerprofileComponent', () => {
  let component: EdittravellerprofileComponent;
  let fixture: ComponentFixture<EdittravellerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittravellerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittravellerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
