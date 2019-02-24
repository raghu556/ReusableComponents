import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePaginationComponent } from './autocomplete-pagination.component';

describe('AutocompletePaginationComponent', () => {
  let component: AutocompletePaginationComponent;
  let fixture: ComponentFixture<AutocompletePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
