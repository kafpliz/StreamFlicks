import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { EMain } from '../../shared/enum/main.enum';
import { EMovie } from '../../shared/enum/movie.enum';
import { IMovie } from '../../shared/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  getMovie(id:string){
    return this.http.get<IMovie>(EMain.api + EMovie.url + id)
  }
}
