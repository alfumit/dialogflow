import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactChatComponent } from './react-chat.component';

describe('ReactChatComponent', () => {
  let component: ReactChatComponent;
  let fixture: ComponentFixture<ReactChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
