import { Component, inject } from '@angular/core';
import { CvaInputComponent } from "../../../../shared/cva/cva-input/cva-input.component";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { DataSharedService } from '../../../../shared/services/data-shared.service';

@Component({
  selector: 'app-login',
  imports: [CvaInputComponent, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup
  fb: FormBuilder = inject(FormBuilder)
  isInvalid: boolean = false;
  #service = inject(AuthService)
  #dataShared = inject(DataSharedService)
  #router = inject(Router)
  loginError: any = {
    inCorrect: false,
    mesage: ''
  }
  ngOnInit() {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    })

  }

  send() {
    this.isInvalid = this.form.invalid

    if (!this.form.invalid) {
      this.#service.login(this.form.value).subscribe(data => {
        if (data.status && data.message && data.status == 400) {
     
          
          this.loginError.inCorrect = true
          this.loginError.mesage = data.message
        } else if (data.access && data.refresh) {
          this.#dataShared.setTokens(data.access, data.refresh)
          this.#router.navigate(['/']);
        }
      })
    }
  }
}
