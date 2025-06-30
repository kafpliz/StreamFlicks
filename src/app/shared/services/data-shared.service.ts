import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { EMain } from '../enum/main.enum';
import { EAuth } from '../enum/auth.enum';
import { AuthService } from '../../core/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  #cookie = inject(CookieService)
  #service = inject(AuthService)
  #isLoginSubject:BehaviorSubject< boolean> = new BehaviorSubject<boolean>(false)
  isLogged = this.#isLoginSubject.asObservable();

 
  private user: IUser = {
    id: null,
    email: null,
    access: null,
    refresh: null
  }

  getDetails() {
    this.user.access = this.#cookie.get('access') ? this.#cookie.get('access') : null
    this.user.refresh = this.#cookie.get('refresh') ? this.#cookie.get('refresh') : null

    this.#service.isLogin(this.user.access, this.user.refresh).subscribe(data=> {
     this.#isLoginSubject.next(true)
    })
    
  }

  getData() {
    
  }

  setTokens(acc:string, ref:string){
    const accessExpire = new Date();
    const refreshExpire = new Date();
    this.#cookie.set('access', acc, {path: '/', expires: accessExpire.setMinutes(accessExpire.getMinutes() + 15)})
    this.#cookie.set('refresh', ref, {path: '/', expires: refreshExpire.setDate(refreshExpire.getDate() + 15)})
    this.getDetails()
  }



}
