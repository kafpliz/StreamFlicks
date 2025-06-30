import { Component, HostListener, inject } from '@angular/core';
import { CatalogCardComponent } from "./components/catalog-card/catalog-card.component";
import { CatalogService } from '../../core/services/catalog.service';
import { ICatalog, ICatalogCard } from '../../shared/interfaces/catalog.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FilterComponent } from "./components/filter/filter.component";
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-catalog',
  imports: [CatalogCardComponent, RouterLink, FilterComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  #service = inject(CatalogService)
  #scrollSubject = new Subject<void>();
  #destroy$ = new Subject<void>();

  content!: ICatalogCard[]
  load: boolean = false
  #route = inject(ActivatedRoute)
  #router = inject(Router)
  page = 1

  ngOnInit() {
    this.#scrollSubject.pipe(debounceTime(5000), takeUntil(this.#destroy$)).subscribe(() => this.handleScroll())

    this.#route.queryParams.pipe(takeUntil(this.#destroy$)).subscribe(data => {
      this.handleParams(data)
    })
  }

  handleParams(data: any) {
    this.page = Number(data['page']) || 1
    this.load = true
    this.#service.getCatalog(this.page, data['sort'], data['status'], data['type']).subscribe({
      next: (data) => {
        if (!this.content || this.page == 1) {
          this.content = data.data
        } else {
          this.content.push(...data.data)
        }
        this.load == false
      },
      error: (err) => { this.load = false },
    })
  }

  handleScroll() {
    /* if (this.load) return; */
    console.log(this.page);
    
    const pageScroll = window.scrollY + window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (pageScroll >= documentHeight - 100 && this.load) {
      this.page++;
      this.load = true
      this.#router.navigate([], {
        relativeTo: this.#route,
        queryParamsHandling: 'merge',
        queryParams: { page: this.page },
      })


    }
  }


  /* @HostListener('window:scroll', [])
  pageScroll() {
    this.#scrollSubject.next()
  } */

  ngOnDestroy() {
    this.#destroy$.next()
    this.#destroy$.complete()
  }
}
