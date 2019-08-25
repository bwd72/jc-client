import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSearchFieldComponent } from './grid-search-field.component';

describe('GridSearchFieldComponent', () => {
  let component: GridSearchFieldComponent;
  let fixture: ComponentFixture<GridSearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
