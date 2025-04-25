
import { Component, Input } from '@angular/core';
import {  IHeaderSearchCardPerson } from '../../interfaces/header.interface';

@Component({
  selector: 'app-search-persons-card',
  imports: [],
  templateUrl: './search-persons-card.component.html',
  styleUrl: './search-persons-card.component.scss'
})
export class SearchPersonsCardComponent {
  @Input() data!:IHeaderSearchCardPerson



}
