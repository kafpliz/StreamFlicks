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

    if (this.#webApp.platform !== 'unknown' && !this.#webApp.isExpanded) {
      this.#webApp.expand();
    }
  }
}
