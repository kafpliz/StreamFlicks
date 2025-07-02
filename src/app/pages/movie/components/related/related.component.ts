import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { IMovieSequels } from '../../../../shared/interfaces/movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-related',
  imports: [RouterLink],
  templateUrl: './related.component.html',
  styleUrl: './related.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RelatedComponent {
  @Input() sequels!:IMovieSequels[]
}
