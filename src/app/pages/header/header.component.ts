import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataSharedService } from '../../shared/services/data-shared.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: boolean = false
  #DataShared = inject(DataSharedService)
  isLogin:boolean = false
  ngOnInit(){
   this.isLogin = this.#DataShared.isLogin()
  }

  changeActive(){
    this.items = !this.items
    
  }
}
