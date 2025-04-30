import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-foo',
  imports: [BarComponent],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent {

}
