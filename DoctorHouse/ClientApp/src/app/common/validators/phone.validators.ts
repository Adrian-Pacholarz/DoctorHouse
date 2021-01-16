import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class PhoneValidators {
  static phoneLength(control: AbstractControl): ValidationErrors | null {
    if (control.value.length !== 9 && control.value.length !== 0)
      return { phoneLength: true };

    return null;
  }

  static phoneIsNaN(control: AbstractControl): ValidationErrors | null {
    if (isNaN(+control.value))
      return { phoneIsNaN: true };

    return null;
  }
}
