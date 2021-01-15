import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMiniCardsComponent } from './users-mini-cards.component';

describe('UsersMiniCardsComponent', () => {
  let component: UsersMiniCardsComponent;
  let fixture: ComponentFixture<UsersMiniCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMiniCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMiniCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
