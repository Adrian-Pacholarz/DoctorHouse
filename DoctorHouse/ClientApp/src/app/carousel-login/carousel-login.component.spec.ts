import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLoginComponent } from './carousel-login.component';

describe('CarouselLoginComponent', () => {
  let component: CarouselLoginComponent;
  let fixture: ComponentFixture<CarouselLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
