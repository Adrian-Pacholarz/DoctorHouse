import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class AreaValidators {
  static areaIsNanAndMoreThan30(control: AbstractControl): ValidationErrors | null {
    if (isNaN(+control.value))
      return { areaIsNanAndMoreThan30: true };

    if (control.value < 1 || control.value > 30)
      return { areaIsNanAndMoreThan30: true };

    return null;
  }
}
