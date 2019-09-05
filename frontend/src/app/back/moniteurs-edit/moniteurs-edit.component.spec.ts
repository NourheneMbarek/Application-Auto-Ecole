import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniteursEditComponent } from './moniteurs-edit.component';

describe('MoniteursEditComponent', () => {
  let component: MoniteursEditComponent;
  let fixture: ComponentFixture<MoniteursEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniteursEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniteursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
