import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataSharedService } from '../../shared/services/data-shared.service';

import { DialogComponent } from "./dialog/dialog.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, DialogComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: boolean = false
  #DataShared = inject(DataSharedService)
  isLogin: boolean = false
  view: boolean = false
  #router = inject(Router)
  #subscription!  :Subscription
  ngOnInit() {
    this.#subscription = this.#DataShared.isLogged.subscribe(loginstatus=> {
        this.isLogin = loginstatus
    })

  }

  changeActive() {
    this.items = !this.items
  }
  ngOnDestroy(){
    if(this.#subscription){
      this.#subscription.unsubscribe()
    }
  }
  openDialog(){
    this.view = true
  }
}
