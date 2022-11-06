import { FormControl } from "@angular/forms";

export class CustomeValidators {
  static invalidInput(control: FormControl): {[s: string]: boolean} | null {
    if(control.value === 'Matvey') {
      return null;
    }
    return {'invalidInput': true};
  }
}