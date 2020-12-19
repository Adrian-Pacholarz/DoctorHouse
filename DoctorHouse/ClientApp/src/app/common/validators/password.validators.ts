import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  static passwordsMustMatch(control: AbstractControl): ValidationErrors | null {
    if (control.get('newPassword').value !== control.get('repeatPassword').value)
      return { passwordsMustMatch: true };

    return null;
  }
}
