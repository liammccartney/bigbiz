import { ControlValueAccessor } from '@angular/forms';

/**
 * Default implementation of ControlValueAccessor.  Should only be used with JuiceBox or WineBox components to allow two-way binding via FormsModule or ReactiveFormsModule
 * NOTE: If using ngModel in the implementing component, you cannot use banana in the box `[(ngModel)]`; you must use `[ngModel]` and `(ngModelChange)`
 * @param T The type of the value to be two-way bound by the component
 * @example
 * @Component({
 *       selector: 'juicy-form',
 *       template: `<input class='input-field' type="text" [ngModel]="value" (ngModelChange)="valueChanged($event)" />`,
 *       providers: [
 *         {
 *           provide: NG_VALUE_ACCESSOR,
 *           useExisting: forwardRef(() => JuicyForm),
 *           multi: true,
 *         },
 *       ]
 *     	standalone: false
})
 *     class JuicyForm extends JuicyValueAccessor<string> {
 *       // stuff
 *     }
 *
 * @usage
 * <juicy-form [(ngModel)]="someVariable"></juicy-form>
 * <juicy-form [formControl]="someFormControl"></juicy-form>
 * <form [formGroup]="someFormGroup">
 *   <juicy-form formControlName="nameOfControlInSomeFormGroup"></juicy-form>
 * </form>
 */
export class JuicyValueAccessor<T> implements ControlValueAccessor {
  protected _isDisabled = false;
  protected _isTouched = false;
  disabledByPermissions = false;
  value: T | null = null;
  onChange = (_value: T | null) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: T | null): void {
    this.value = val;
  }
  setDisabledState(isDisabled: boolean) {
    this._isDisabled = this.disabledByPermissions || isDisabled;
  }

  valueChanged(value: T | null): void {
    this.writeValue(value);
    this.onChange(this.value);
  }

  markAsTouched() {
    if (!this._isTouched) {
      this.onTouched();
      this._isTouched = true;
    }
  }
}


