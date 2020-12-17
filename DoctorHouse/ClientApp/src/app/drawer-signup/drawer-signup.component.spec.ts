import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSignupComponent } from './drawer-signup.component';

describe('DrawerSignupComponent', () => {
  let component: DrawerSignupComponent;
  let fixture: ComponentFixture<DrawerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
