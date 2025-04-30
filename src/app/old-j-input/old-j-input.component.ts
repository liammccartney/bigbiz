import { Component, effect, Optional, Self, signal } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { JuicyValueAccessor } from '../j-value-accessor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-old-j-input',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './old-j-input.component.html',
  styleUrl: './old-j-input.component.css'
})
export class OldJInputComponent extends JuicyValueAccessor<number> {
  constructor(@Optional() @Self() public ngControl: NgControl) {
    super();
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

}
