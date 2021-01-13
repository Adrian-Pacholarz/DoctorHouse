import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CarouselLoginComponent } from './carousel-login/carousel-login.component';
import { UserLoginButtonComponent } from './user-login-button/user-login-button.component';
import { MenuDropdownLinkComponent } from './menu-dropdown-link/menu-dropdown-link.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { MainTextComponent } from './main-text/main-text.component';
import { CardsComponent } from './cards/cards.component';
import { SearchbarMainComponent } from './searchbar-main/searchbar-main.component';
import { FooterComponent } from './footer/footer.component';
import { DrawerSignupComponent } from './drawer-signup/drawer-signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { UserSpecialistProfileComponent } from './user-specialist-profile/user-specialist-profile.component';
import { UserSpecialistProfileCardComponent } from './user-specialist-profile-card/user-specialist-profile-card.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CarouselLoginComponent,
    UserLoginButtonComponent,
    MenuDropdownLinkComponent,
    NavLogoComponent,
    MainTextComponent,
    CardsComponent,
    SearchbarMainComponent,
    FooterComponent,
    DrawerSignupComponent,
    UserProfileComponent,
    UserProfileCardComponent,
    UserSpecialistProfileComponent,
    UserSpecialistProfileCardComponent,
    RadioButtonComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: CarouselLoginComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'specialist-profile', component: UserSpecialistProfileComponent},
    { path: 'fetch-data', component: FetchDataComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
