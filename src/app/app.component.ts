import { HeaderComponent } from './pages/header/header.component';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DataSharedService } from './shared/services/data-shared.service';
import { TgService } from './core/tg.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StreamFlicks';
  #DataShared = inject(DataSharedService)
  #router = inject(Router)
  tg  = inject(TgService)
  ngOnInit(){

   // this.#DataShared.getDetails()
    this.tg.init()
    this.#router.events.subscribe(event=> {
      if(event instanceof NavigationEnd){  
         const urlWithoutQueryParams = event.urlAfterRedirects.split('?')
         if(!urlWithoutQueryParams[1]){
            window.scrollTo(0,0)
         }
       
      }
    })
  }

  
}
