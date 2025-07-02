import { Component,CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IMovieSimilar } from '../../../../shared/interfaces/movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recomended',
  imports: [RouterLink],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecomendedComponent {
  @Input() similar!:IMovieSimilar[]
}
