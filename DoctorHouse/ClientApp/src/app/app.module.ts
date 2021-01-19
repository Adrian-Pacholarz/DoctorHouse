import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';

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
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserSpecialistEditProfileComponent } from './user-specialist-edit-profile/user-specialist-edit-profile.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { UsersMiniCardsComponent } from './users-mini-cards/users-mini-cards.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CreateCustomerService } from './services/create-customer.service';
import { CreateSpecialistService } from './services/create-specialist.service';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateSpecialistComponent } from './create-specialist/create-specialist.component';
import { CompaniesService } from './services/companies.service';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { CustomerService } from './services/customer.service';
import { LeftColumnDetailsComponent } from './left-column-details/left-column-details.component';



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
    UserEditProfileComponent,
    UserSpecialistEditProfileComponent,
    GetUsersComponent,
    UsersMiniCardsComponent,
    CompanyProfileComponent,
    CreateCustomerComponent,
    CreateSpecialistComponent,
    GetCustomerComponent,
    LeftColumnDetailsComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ToastyModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: CarouselLoginComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'users/customers/:id', component: UserProfileComponent },
      { path: 'users/specialists/:id', component: UserSpecialistProfileComponent},
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'users/customers/id/0', component: UserEditProfileComponent },
      { path: 'users/specialists/id/0', component: UserSpecialistEditProfileComponent },
      { path: 'users/specialists', component: GetUsersComponent },
      {path: 'companies/:id', component: CompanyProfileComponent}
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    CreateCustomerService,
    CreateSpecialistService,
    CompaniesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
