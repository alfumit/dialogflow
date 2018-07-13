import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMicrosoftComponent } from './angular-microsoft.component';

describe('AngularMicrosoftComponent', () => {
  let component: AngularMicrosoftComponent;
  let fixture: ComponentFixture<AngularMicrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMicrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
