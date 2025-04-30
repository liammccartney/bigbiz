import { Component, effect, Optional, Self, signal } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { JuicyValueAccessor } from '../j-value-accessor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-j-input',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './j-input.component.html',
  styleUrl: './j-input.component.css'
})
export class JInputComponent extends JuicyValueAccessor<number> {
  internalValue = signal<number | null>(null);

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super();
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }

    effect(() => {
      if ((this.internalValue() ?? '') === (this.value ?? '')) {
        return;
      }
      this.valueChanged(this.internalValue());
    })
  }

  override writeValue(value: number | null): void {
    const safeValue = value === null || Number.isFinite(value) ? value : 0;
    super.writeValue(safeValue);
    this.internalValue.set(safeValue);
  }

  override valueChanged(value: number | null): void {
    this.internalValue.set(value);
    if (Number.isFinite(this.value) && this.internalValue() === this.value) return;
    super.valueChanged(value);
  }


}
