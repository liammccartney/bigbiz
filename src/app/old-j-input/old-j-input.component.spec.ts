import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldJInputComponent } from './old-j-input.component';

describe('OldJInputComponent', () => {
  let component: OldJInputComponent;
  let fixture: ComponentFixture<OldJInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldJInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldJInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
