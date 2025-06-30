import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { EMain } from '../../shared/enum/main.enum';
import { EAuth } from '../../shared/enum/auth.enum';
import { ILogin, ILoginRes, ISignup } from '../../shared/interfaces/auth.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  
    signUp(userData:ISignup){
      const formData = new FormData()
      formData.append('email', userData.email)
      formData.append('name',userData.firstName)
      formData.append('lastName',userData.lastName)
      formData.append('password',userData.password)
      if(userData.photo){
        const photo:File = userData.photo 
      formData.append('photo', photo, photo.name)

      }
      
      return this.http.post(EMain.api + EAuth.signup, formData)
    }

    login(userData:ILogin){
      return this.http.post<ILoginRes>(EMain.api + EAuth.login, userData)
    } 

    isLogin(acc:string | null, ref:string | null){
      const headers = new HttpHeaders().set('access', acc || '').set('refresh',ref || '')
      return this.http.get(EMain.api + EAuth.isLogin, { headers })
    }
}
