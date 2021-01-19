import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnUserDetailsComponent } from './left-column-user-details.component';

describe('LeftColumnUserDetailsComponent', () => {
  let component: LeftColumnUserDetailsComponent;
  let fixture: ComponentFixture<LeftColumnUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftColumnUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumnUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
