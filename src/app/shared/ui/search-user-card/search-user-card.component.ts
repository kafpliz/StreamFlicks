import { Component, Input } from '@angular/core';
import { IHeaderSearchCardUser } from '../../interfaces/header.interface';


@Component({
  selector: 'app-search-user-card',
  imports: [],
  templateUrl: './search-user-card.component.html',
  styleUrl: './search-user-card.component.scss'
})
export class SearchUserCardComponent {
  @Input() data!:IHeaderSearchCardUser

}
