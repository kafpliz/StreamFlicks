import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataSharedService } from '../../shared/services/data-shared.service';

import { DialogComponent } from "./dialog/dialog.component";

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

  ngOnInit() {
    this.isLogin = this.#DataShared.isLogin()

  }

  changeActive() {
    this.items = !this.items
  }

  openDialog(){
    this.view = true
  }
}
