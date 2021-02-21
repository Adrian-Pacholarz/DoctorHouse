import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialistEditProfileComponent } from './user-specialist-edit-profile.component';

describe('UserSpecialistEditProfileComponent', () => {
  let component: UserSpecialistEditProfileComponent;
  let fixture: ComponentFixture<UserSpecialistEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecialistEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialistEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
