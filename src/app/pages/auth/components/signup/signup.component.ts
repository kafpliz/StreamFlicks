import { Component, inject } from '@angular/core';
import { CvaInputComponent } from "../../../../shared/cva/cva-input/cva-input.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CvaPhotoInputComponent } from "../../../../shared/cva/cva-photo-input/cva-photo-input.component";
import { AuthService } from '../../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [CvaInputComponent, ReactiveFormsModule, CommonModule, CvaPhotoInputComponent, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }
  isRequired:boolean | any = false
  isInvalid = false
  #service = inject(AuthService)
  #router = inject(Router)
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.maxLength(50)]],
      lastName: ['', [Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      repeatPassword: ['', [Validators.required]],
      photo: ['']
    })
  }

  send() {

      this.isRequired = (this.form.get('email')?.errors && this.form.get('email')?.touched) || (this.form.get('password')?.errors && this.form.get('password')?.touched) || (this.form.get('repeatPassword')?.errors && this.form.get('repeatPassword')?.touched) 
    
    if (this.form.invalid) {
      this.isInvalid = true
    } else {
      console.log(this.form.value);
  
      this.#service.signUp(this.form.value).subscribe(data=>{
          this.#router.navigate(['/auth/login'])
      })
       
    }
  }
}
