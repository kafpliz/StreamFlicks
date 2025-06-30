import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ICatalogCard } from '../../../../shared/interfaces/catalog.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-card',
  imports: [CommonModule, ],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CatalogCardComponent {
    @Input() data!:ICatalogCard 

}
