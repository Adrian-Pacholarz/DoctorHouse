import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialistProfileCardComponent } from './user-specialist-profile-card.component';

describe('UserSpecialistProfileCardComponent', () => {
  let component: UserSpecialistProfileCardComponent;
  let fixture: ComponentFixture<UserSpecialistProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecialistProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialistProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
