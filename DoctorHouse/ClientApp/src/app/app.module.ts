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
import { AuthenticateService } from './services/authenticate.service';
import { AuthGuard } from './services/auth-guard.service';
import { LeftColumnDetailsComponent } from './left-column-details/left-column-details.component';
import { LeftColumnSpecialistComponent } from './left-column-specialist/left-column-specialist.component';
import { CustomerService } from './services/customer.service';
import { SpecialistsListComponent } from './specialists-list/specialists-list.component';
import { SafePipe } from './safe.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentReadComponent } from './appointment-read/appointment-read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';
defineLocale('engb', enGbLocale);

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
    LeftColumnSpecialistComponent,
    LeftColumnDetailsComponent,
    SpecialistsListComponent,
    SafePipe,
    NotFoundComponent,
    MyAppointmentsComponent,
    AppointmentReadComponent,
    EditAppointmentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ToastyModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: CarouselLoginComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'users/customers/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
      { path: 'users/specialists/:id', component: UserSpecialistProfileComponent, canActivate: [AuthGuard] },
      { path: 'specialists-list', component: SpecialistsListComponent, canActivate: [AuthGuard]},
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'companies/:id', component: CompanyProfileComponent, canActivate: [AuthGuard] },
      { path: 'my-appointments', component: MyAppointmentsComponent, canActivate: [AuthGuard] },
      { path: 'appointments/:id', component: EditAppointmentComponent, canActivate: [AuthGuard]},
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' }
], { relativeLinkResolution: 'legacy' }),
    NgbModule,
    BrowserAnimationsModule,
    jqxGridModule,
    CommonModule, jqxDateTimeInputModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    AuthenticateService,
    AuthGuard,
    CreateCustomerService,
    CreateSpecialistService,
    CompaniesService,
    SafePipe,
    jqxGridModule,
    CommonModule, jqxDateTimeInputModule,
    BsDatepickerModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
