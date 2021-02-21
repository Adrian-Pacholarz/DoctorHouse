"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(companiesService, sanitizer, route, router, starRating, viewportScroller) {
        this.companiesService = companiesService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.starRating = starRating;
        this.viewportScroller = viewportScroller;
        this.getCompanyForm = new forms_1.FormGroup({
            companyName: new forms_1.FormControl(),
            address: new forms_1.FormControl(),
            phone: new forms_1.FormControl(),
            rating: new forms_1.FormControl(),
            description: new forms_1.FormControl()
        });
        starRating.max = 5;
    }
    Object.defineProperty(CompanyProfileComponent.prototype, "companyName", {
        get: function () {
            return this.getCompanyForm.get('companyName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyProfileComponent.prototype, "address", {
        get: function () {
            return this.getCompanyForm.get('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyProfileComponent.prototype, "phone", {
        get: function () {
            return this.getCompanyForm.get('phone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyProfileComponent.prototype, "rating", {
        get: function () {
            return this.getCompanyForm.get('rating');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompanyProfileComponent.prototype, "description", {
        get: function () {
            return this.getCompanyForm.get('description');
        },
        enumerable: false,
        configurable: true
    });
    CompanyProfileComponent.prototype.formatAddress = function () {
        var addressDb = this.getCompanyForm.get('address').value.toLowerCase();
        var street = 'ul.';
        var settlement = 'os.';
        console.log(addressDb);
        if (addressDb.includes(street) || addressDb.includes(settlement)) {
            addressDb = addressDb.slice(3);
        }
        addressDb = addressDb.trim(' ');
        addressDb = addressDb.replace(/\s/g, '+');
        var map = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBlYuKgi1m3lnyfIHv2qkWf_MzpBBc2mr8&q=' + addressDb;
        return this.sanitizer.bypassSecurityTrustResourceUrl(map);
    };
    CompanyProfileComponent.prototype.onClick = function (elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    };
    CompanyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.companyId = +p['id'];
        });
        this.companiesService.getCompanyById(this.companyId).subscribe(function (company) {
            _this.company = company;
            _this.currentRating = +_this.company.rating;
            _this.companyName.setValue(_this.company.companyName);
            _this.rating.setValue(_this.company.rating);
            _this.address.setValue(_this.company.address);
            _this.phone.setValue(_this.company.phoneNumber);
            _this.description.setValue(_this.company.description);
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['/not-found']);
        });
    };
    CompanyProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-company-profile',
            templateUrl: './company-profile.component.html',
            styleUrls: ['./company-profile.component.css']
        })
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());
exports.CompanyProfileComponent = CompanyProfileComponent;
//# sourceMappingURL=company-profile.component.js.map