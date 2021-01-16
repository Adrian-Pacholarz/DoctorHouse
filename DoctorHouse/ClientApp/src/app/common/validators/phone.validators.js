"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneValidators = void 0;
var PhoneValidators = /** @class */ (function () {
    function PhoneValidators() {
    }
    PhoneValidators.phoneLength = function (control) {
        if (control.value.length !== 9 && control.value.length !== 0)
            return { phoneLength: true };
        return null;
    };
    PhoneValidators.phoneIsNaN = function (control) {
        if (isNaN(+control.value))
            return { phoneIsNaN: true };
        return null;
    };
    return PhoneValidators;
}());
exports.PhoneValidators = PhoneValidators;
//# sourceMappingURL=phone.validators.js.map