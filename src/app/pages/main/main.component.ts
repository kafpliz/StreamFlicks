import { Component, inject } from '@angular/core';
import { DataSharedService } from '../../shared/services/data-shared.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  #service = inject(DataSharedService)
  usLOgin:boolean = false
  ngOnInit(){

  }
}
