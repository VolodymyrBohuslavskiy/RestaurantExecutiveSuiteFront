import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategioryComponent } from './add-categiory.component';

describe('AddCategioryComponent', () => {
  let component: AddCategioryComponent;
  let fixture: ComponentFixture<AddCategioryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategioryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategioryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
