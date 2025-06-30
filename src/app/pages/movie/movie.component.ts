import { ActivatedRoute } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import { IMovie, IMovieShortInfo } from '../../shared/interfaces/movie.interface';
import { MovieService } from '../../core/services/movie.service';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-movie',
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieComponent {
  data!: IMovie
  #route = inject(ActivatedRoute)
  #service = inject(MovieService)
  isLoad: boolean = false;
  breakpoints = { 1: { slidesPerView: 2 }, 400: { slidesPerView: 3 }, 500: { slidesPerView: 4 }, 800: { slidesPerView: 5 }, };
  isSlidesEnd:boolean = false
  isSlidesBegin:boolean = true
  safeUrl!:SafeResourceUrl
  #sanitizer = inject(DomSanitizer)
  #ngZone = inject(NgZone)
  @ViewChild('swiperRef', { static: false }) swiperComp!: ElementRef

  ngOnInit() {
    this.#route.params.subscribe(params => {
      this.#service.getMovie(params['id']).subscribe(d => {
        console.log(d);
        this.data = d;
        this.isLoad = true
        if(this.data.link){
          this.safeUrl = this.#sanitizer.bypassSecurityTrustResourceUrl(this.data.link)
        }
      
        
      })
    })
  }

  
  ngAfterViewInit(): void {
    setTimeout(() => {
      const swiperInstance = this.swiperComp.nativeElement.swiper
    
    if(swiperInstance){
      swiperInstance.on('setTranslate', (translate: any) => {
        this.#ngZone.run(()=> {
          this.setArrows(swiperInstance.isBeginning,swiperInstance.isEnd)
        })
   
      });
      
    }
    }, 1500);
    
  }
 

  slidePrev() {
    this.swiperComp.nativeElement.swiper.slidePrev();
  this.isSlidesBegin = this.swiperComp.nativeElement.swiper.isBeginning
  this.isSlidesEnd =  this.swiperComp.nativeElement.swiper.isEnd
  }
  slideNext() {
    this.swiperComp.nativeElement.swiper.slideNext();
    this.isSlidesBegin = this.swiperComp.nativeElement.swiper.isBeginning
    this.isSlidesEnd =  this.swiperComp.nativeElement.swiper.isEnd
  }

  setArrows(prev:boolean, next:boolean){
    this.isSlidesBegin = prev;
    this.isSlidesEnd = next; 
  }

}
