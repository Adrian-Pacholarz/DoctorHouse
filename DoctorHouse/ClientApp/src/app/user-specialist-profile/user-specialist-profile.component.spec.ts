import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialistProfileComponent } from './user-specialist-profile.component';

describe('UserSpecialistProfileComponent', () => {
  let component: UserSpecialistProfileComponent;
  let fixture: ComponentFixture<UserSpecialistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecialistProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
