import { Component,CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IMoviePersons } from '../../../../shared/interfaces/movie.interface';

@Component({
  selector: 'app-persons',
  imports: [],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonsComponent {
  @Input() persons!:IMoviePersons[]
}
