import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cva-photo-input',
  imports: [],
  templateUrl: './cva-photo-input.component.html',
  styleUrl: './cva-photo-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaPhotoInputComponent),
      multi: true
    }
  ]
})
export class CvaPhotoInputComponent implements ControlValueAccessor {
  priviewUrl: string | ArrayBuffer | null = '/user.svg'
  isDisabled: boolean = false

  onChange: any = (value: any) => { }
  onTouched: any = () => { }

  writeValue(data: any): void {
    if (data) {
      this.priviewUrl = data

      
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement
    if (!input.files || input.files.length == 0) return
    const file = input.files[0]

    this.priviewUrl = URL.createObjectURL(file)

    this.onChange(file)
    this.onTouched()

  }

}
