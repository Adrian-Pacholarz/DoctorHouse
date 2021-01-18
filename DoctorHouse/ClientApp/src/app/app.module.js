"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var ng2_toasty_1 = require("ng2-toasty");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var carousel_login_component_1 = require("./carousel-login/carousel-login.component");
var user_login_button_component_1 = require("./user-login-button/user-login-button.component");
var menu_dropdown_link_component_1 = require("./menu-dropdown-link/menu-dropdown-link.component");
var nav_logo_component_1 = require("./nav-logo/nav-logo.component");
var main_text_component_1 = require("./main-text/main-text.component");
var cards_component_1 = require("./cards/cards.component");
var searchbar_main_component_1 = require("./searchbar-main/searchbar-main.component");
var footer_component_1 = require("./footer/footer.component");
var drawer_signup_component_1 = require("./drawer-signup/drawer-signup.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var user_profile_card_component_1 = require("./user-profile-card/user-profile-card.component");
var user_specialist_profile_component_1 = require("./user-specialist-profile/user-specialist-profile.component");
var user_specialist_profile_card_component_1 = require("./user-specialist-profile-card/user-specialist-profile-card.component");
var radio_button_component_1 = require("./radio-button/radio-button.component");
var user_edit_profile_component_1 = require("./user-edit-profile/user-edit-profile.component");
var user_specialist_edit_profile_component_1 = require("./user-specialist-edit-profile/user-specialist-edit-profile.component");
var get_users_component_1 = require("./get-users/get-users.component");
var users_mini_cards_component_1 = require("./users-mini-cards/users-mini-cards.component");
var company_profile_component_1 = require("./company-profile/company-profile.component");
var create_customer_service_1 = require("./services/create-customer.service");
var create_specialist_service_1 = require("./services/create-specialist.service");
var create_customer_component_1 = require("./create-customer/create-customer.component");
var create_specialist_component_1 = require("./create-specialist/create-specialist.component");
var companies_service_1 = require("./services/companies.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                counter_component_1.CounterComponent,
                fetch_data_component_1.FetchDataComponent,
                carousel_login_component_1.CarouselLoginComponent,
                user_login_button_component_1.UserLoginButtonComponent,
                menu_dropdown_link_component_1.MenuDropdownLinkComponent,
                nav_logo_component_1.NavLogoComponent,
                main_text_component_1.MainTextComponent,
                cards_component_1.CardsComponent,
                searchbar_main_component_1.SearchbarMainComponent,
                footer_component_1.FooterComponent,
                drawer_signup_component_1.DrawerSignupComponent,
                user_profile_component_1.UserProfileComponent,
                user_profile_card_component_1.UserProfileCardComponent,
                user_specialist_profile_component_1.UserSpecialistProfileComponent,
                user_specialist_profile_card_component_1.UserSpecialistProfileCardComponent,
                radio_button_component_1.RadioButtonComponent,
                user_edit_profile_component_1.UserEditProfileComponent,
                user_specialist_edit_profile_component_1.UserSpecialistEditProfileComponent,
                get_users_component_1.GetUsersComponent,
                users_mini_cards_component_1.UsersMiniCardsComponent,
                company_profile_component_1.CompanyProfileComponent,
                create_customer_component_1.CreateCustomerComponent,
                create_specialist_component_1.CreateSpecialistComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_toasty_1.ToastyModule.forRoot(),
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'login', component: carousel_login_component_1.CarouselLoginComponent },
                    { path: 'counter', component: counter_component_1.CounterComponent },
                    { path: 'users/customers/id', component: user_profile_component_1.UserProfileComponent },
                    { path: 'users/specialists/id', component: user_specialist_profile_component_1.UserSpecialistProfileComponent },
                    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'users/customers/id/0', component: user_edit_profile_component_1.UserEditProfileComponent },
                    { path: 'users/specialist/id/0', component: user_specialist_edit_profile_component_1.UserSpecialistEditProfileComponent },
                    { path: 'users', component: get_users_component_1.GetUsersComponent },
                    { path: 'companies', component: company_profile_component_1.CompanyProfileComponent }
                ], { relativeLinkResolution: 'legacy' })
            ],
            providers: [
                create_customer_service_1.CreateCustomerService,
                create_specialist_service_1.CreateSpecialistService,
                companies_service_1.CompaniesService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map