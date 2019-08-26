import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTextareaFieldComponent } from './data-textarea-field.component';

describe('DataTextareaFieldComponent', () => {
  let component: DataTextareaFieldComponent;
  let fixture: ComponentFixture<DataTextareaFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTextareaFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
