import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { Dialog } from 'primeng/dialog'
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, NavigationStart } from '@angular/router';
import { IHeaderDialogParams, IHeaderSearchResponce } from '../../../shared/interfaces/header.interface';
import { FastSearchService } from '../../../core/services/fast-search.service';
import { SearchMovieCardComponent } from "../../../shared/ui/search-movie-card/search-movie-card.component";
import { SearchPersonsCardComponent } from '../../../shared/ui/search-persons-card/search-persons-card.component';
import { SearchUserCardComponent } from '../../../shared/ui/search-user-card/search-user-card.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dialog',
  imports: [Dialog, FormsModule, CommonModule, SearchMovieCardComponent, SearchPersonsCardComponent, SearchUserCardComponent, RouterLink],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() visible: boolean = false
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()
  isLabelActive: boolean = false;
  inputText: string = ''
  typeActive: string = 'movie'
  #router = inject(Router)
  #route = inject(ActivatedRoute)
  #service = inject(FastSearchService)
  page: number = 1
  maxPage: number | null = null
  params: IHeaderDialogParams = {
    type: this.typeActive
  }
  responce: IHeaderSearchResponce | null = null
  #routerSubscription!:Subscription;

  ngOnInit() {
    this.#route.queryParams.subscribe(data => {
      if (data['type'] && data['q']&& data['page']) {
        this.params.type = data['type']
        this.typeActive = data['type']
        this.params.page = data['page']
        this.params.q = data['q']
        this.inputText = data['q']
        this.isLabelActive = this.inputText.length == 0 ? false : true
      }
      
      if (this.params.q && this.params.type && this.params.page) {
        this.#service.fastSearch(this.params.q, this.params.type, this.params.page).subscribe(data => {
          this.responce = data
        })
      }

    })

    this.#routerSubscription = this.#router.events.subscribe(event=> {
      if(event instanceof NavigationStart){
        const currentUrl = this.#router.url
      
        
        if (new URL('http://local' + currentUrl).pathname !== new URL('http://local' + event.url).pathname) {
          this.visible = false;
        }

      }
    })
  }

  onHide() {
    this.visibleChange.emit(false)
  }

  changeType(type: string) {
    this.typeActive = type
    this.params.type = this.typeActive
    this.#router.navigate([], {
      relativeTo: this.#route,
      queryParams: {
        type: this.typeActive
      },
      queryParamsHandling: 'merge'
    })
  }

  selectType(type: string) {
    return this.typeActive == type
  }

  changeLabelState() {

    if (this.isLabelActive && this.inputText.length == 0) {
      this.isLabelActive = this.inputText.length == 0 ? false : true
    } else {
      this.isLabelActive = true
    }
  }

  setQuery() {
    if (this.inputText.length >= 2) {
      this.params['q'] = this.inputText
      this.params['page'] = this.page
      this.#router.navigate([], {
        relativeTo: this.#route,
        queryParams: this.params,
        queryParamsHandling: 'merge'
      })
    }
  }

  ngOnDestroy(){
    this.#routerSubscription.unsubscribe()
  }

}
