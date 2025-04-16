import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { EMain } from '../enum/main.enum';
import { EAuth } from '../enum/auth.enum';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  #cookie = inject(CookieService)
  #http = inject(HttpClient)

  private isLoginV: boolean = false
  private user: IUser = {
    id: null,
    email: null,
    access: null,
    refresh: null
  }

  setData() {
    this.user.access = this.#cookie.get('access') ? this.#cookie.get('access') : null
    this.user.refresh = this.#cookie.get('refresh') ? this.#cookie.get('refresh') : null
    this.#http.get(EMain.api + EAuth.isLogin).subscribe(data=> {
      this.isLoginV = true
      
    }, err => {})
  }

  getData() {
    
  }

  isLogin() {
    return this.isLoginV
  }

}
