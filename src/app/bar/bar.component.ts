import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { JInputComponent } from '../j-input/j-input.component';

@Component({
  selector: 'app-bar',
  imports: [ReactiveFormsModule, JInputComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent {
  fb = inject(FormBuilder)
  form = this.fb.group({qtyInput: 0, qtyJuicy: 0})
}
