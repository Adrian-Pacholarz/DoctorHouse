import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropdownLinkComponent } from './menu-dropdown-link.component';

describe('MenuDropdownLinkComponent', () => {
  let component: MenuDropdownLinkComponent;
  let fixture: ComponentFixture<MenuDropdownLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDropdownLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDropdownLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
