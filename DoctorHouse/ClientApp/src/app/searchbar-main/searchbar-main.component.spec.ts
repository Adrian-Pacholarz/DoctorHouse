import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarMainComponent } from './searchbar-main.component';

describe('SearchbarMainComponent', () => {
  let component: SearchbarMainComponent;
  let fixture: ComponentFixture<SearchbarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
