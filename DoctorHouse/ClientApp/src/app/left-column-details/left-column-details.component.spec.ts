import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnDetailsComponent } from './left-column-details.component';

describe('LeftColumnDetailsComponent', () => {
  let component: LeftColumnDetailsComponent;
  let fixture: ComponentFixture<LeftColumnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftColumnDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
