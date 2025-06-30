import { HeaderComponent } from './pages/header/header.component';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DataSharedService } from './shared/services/data-shared.service';

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
  ngOnInit(){

   // this.#DataShared.getDetails()

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
