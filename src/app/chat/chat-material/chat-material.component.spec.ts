import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMaterialComponent } from './chat-material.component';

describe('ChatMaterialComponent', () => {
  let component: ChatMaterialComponent;
  let fixture: ComponentFixture<ChatMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
