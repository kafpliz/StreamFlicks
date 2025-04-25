import { Component, input, Input } from '@angular/core';
import { IHeaderSearchCardMovie } from '../../interfaces/header.interface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-search-movie-card',
  imports: [CommonModule],
  templateUrl: './search-movie-card.component.html',
  styleUrl: './search-movie-card.component.scss'
})
export class SearchMovieCardComponent {
  @Input() data!:IHeaderSearchCardMovie
  genres!:string[] | null 
  starColor!:string
  ngOnChanges() {
    this.getGenresName();
    this.getStarColor()
  }

  getGenresName(){
    this.data.genres ? this.genres = this.data.genres.map(g => g.name) : null
  }

  getStarColor() {
   if(this.data.rating){
     this.starColor =  this.data.rating >= 8 ? 'gold' : this.data.rating >= 5 ? 'orange' : 'red'
   }
  }
}
