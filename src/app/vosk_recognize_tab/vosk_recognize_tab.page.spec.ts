import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizerPage } from './vosk_recognize_tab.page';

describe('RecognizerPage', () => {
  let component: RecognizerPage;
  let fixture: ComponentFixture<RecognizerPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(RecognizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
