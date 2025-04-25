import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { EMain } from '../../shared/enum/main.enum';
import { EHeader } from '../../shared/enum/header.enum';
import { HttpParams } from '@angular/common/http';
import { IHeaderSearchResponce } from '../../shared/interfaces/header.interface';

@Injectable({
  providedIn: 'root'
})
export class FastSearchService extends BaseService {

  fastSearch(q: string, type: string, page: number) {
    const params = new HttpParams().set('q', q).set('page', page).set('type', type)
    return this.http.get<IHeaderSearchResponce>(EMain.api + EHeader.url, { params })
  }

}
