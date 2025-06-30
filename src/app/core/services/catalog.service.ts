import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { EMain } from '../../shared/enum/main.enum';
import { ECatalog } from '../../shared/enum/catalog.enum';
import { ICatalog } from '../../shared/interfaces/catalog.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService extends BaseService {

  getCatalog(page: number = 1, sort: string | undefined, status: string | undefined, type: string | undefined) {
    let params = new HttpParams()
   

    if (sort) { params = params.set('sort', sort) }
    if (status) { params = params.set('status', status) }
    if (type) { params = params.set('type', type) }
    if (page) { params = params.set('page', page) }



    return this.http.get<ICatalog>(EMain.api + ECatalog.url, { params })
  }
}
