import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnSpecialistComponent } from './left-column-specialist.component';

describe('LeftColumnSpecialistComponent', () => {
  let component: LeftColumnSpecialistComponent;
  let fixture: ComponentFixture<LeftColumnSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftColumnSpecialistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumnSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
