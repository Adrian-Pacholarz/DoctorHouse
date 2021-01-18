"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaValidators = void 0;
var AreaValidators = /** @class */ (function () {
    function AreaValidators() {
    }
    AreaValidators.areaIsNanAndMoreThan30 = function (control) {
        if (isNaN(+control.value))
            return { areaIsNanAndMoreThan30: true };
        if (control.value < 1 || control.value > 30)
            return { areaIsNanAndMoreThan30: true };
        return null;
    };
    return AreaValidators;
}());
exports.AreaValidators = AreaValidators;
//# sourceMappingURL=area.validators.js.map