import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPage } from './record_tab.page';

describe('RecordPage', () => {
  let component: RecordPage;
  let fixture: ComponentFixture<RecordPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(RecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
