
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { Slider } from 'primeng/slider'
import { SelectComponent } from "./components/select/select.component";
import { SelectGroupComponent } from "./components/select-group/select-group.component";
@Component({
  selector: 'app-filter',
  imports: [FormsModule, SelectComponent, SelectGroupComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  sort = [
    {
      label: 'Рейтингу',
      value: 'pi-star-fill',
      items: [
        { label: 'Рейтинг (возр.)', value: 'rating' },
        { label: 'Рейтинг (убыв.)', value: '-rating' },
      ]
    },
    {
      label: 'Релизу',
      value: 'pi-calendar',
      items: [
        { label: 'Релиз (возр.)', value: 'relesed' },
        { label: 'Релиз (убыв.) ', value: '-relesed' },
      ]
    },
    {
      label: 'Алфавиту',
      value: 'pi-sort-alpha-down-alt',/* pi-sort-alpha-up-alt */
      items: [
        { label: 'Алфавит (возр.)', value: 'label' },
        { label: 'Алфавит (убыв.)', value: '-label' },
      ]
    },
    {
      label: 'Кол-ву голосов',
      value: 'pi-volume-down',
      items: [
        { label: 'Кол-во голосов (возр.)', value: 'votes' },
        { label: 'Кол-во голосов (убыв.)', value: '-votes' },
      ]
    }
  ];
  type = [
    {
      value: 'animated-series',
      label: 'Мультсериал'
    },
    {
      value: 'anime',
      label: 'Аниме'
    },
    {
      value: 'cartoon',
      label: 'Мультфильм'
    },
    {
      value: 'movie',
      label: 'Фильм'
    },
    {
      value: 'tv-series',
      label: 'Сериал'
    },
  ];
  status = [
    {
      value: 'announced',
      label: 'Анонсированый'
    },
    {
      value: 'completed',
      label: 'Завершённый'
    },
    {
      value: 'filming',
      label: 'Снимают'
    },
    {
      value: 'post-production',
      label: 'Постпродакшн'
    },
    {
      value: 'pre-production',
      label: 'Предпроизводство'
    },
  ];

  rating: number[] = [1, 10]

  #router = inject(Router)
  #route = inject(ActivatedRoute)

  ngOnInit() {

  }

  changeSort(selectSort: string) {
    if (selectSort) this.setQueryParam('sort', selectSort)

  }

  changeSelect(param:any, param_name:string){
    if(param) this.setQueryParam(param_name, param.value)
    
  }


  setQueryParam(param_name: string, param: string | number) {
    this.#router.navigate([], {
      relativeTo: this.#route,
      queryParams: {
        [param_name]: param
      },
      queryParamsHandling: 'merge'
    })
  }
}
