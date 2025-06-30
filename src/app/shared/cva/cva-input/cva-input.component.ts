import { ChangeDetectorRef, Component, forwardRef, HostBinding, InjectFlags, Injector, input, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { DCva } from '../../details/cva.details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cva-input',
  imports: [CommonModule],
  templateUrl: './cva-input.component.html',
  styleUrl: './cva-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaInputComponent),
      multi: true
    }
  ]
})
export class CvaInputComponent implements ControlValueAccessor {
  @Input() placeholder!: string;
  placeholderArr!: string[]
  value: string = ''
  isDisabled: boolean = false

  private ngControl: NgControl | null = null;

  constructor(private injector: Injector, private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.placeholderArr = DCva[this.placeholder]
  }

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl, null, InjectFlags.Self | InjectFlags.Optional)
    if (this.ngControl) {
      this.ngControl.valueAccessor = this
      this.ngControl.statusChanges?.subscribe(()=> { this.cd.markForCheck()})
    }
  }
  onChange = (value: any) => { };
  onTouched = () => { };

  onInput(event: Event) {
    const target = event.target as HTMLInputElement
    
    this.value = target.value
    this.onChange(this.value)

  }

  writeValue(data: any): void {
    this.value = data || ''
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;

  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  @HostBinding('class.invalid')
  get isInvalid(): boolean {
     
    return !!(
      this.ngControl &&
      this.ngControl.invalid &&
      (this.ngControl.touched || this.ngControl.dirty)
    );
  }

}

