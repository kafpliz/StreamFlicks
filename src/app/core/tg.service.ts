import { Injectable } from '@angular/core';

declare const Telegram: any
@Injectable({
  providedIn: 'root'
})
export class TgService {

  #webApp: any;
  constructor() {
    this.#webApp = Telegram.WebApp
  }

  init() {
      console.log();
      if(this.#webApp.platform  != 'unknown'){
         this.#webApp.requestFullscreen();
      }
    
  }
}
