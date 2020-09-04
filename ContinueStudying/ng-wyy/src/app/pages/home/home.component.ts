import { SingerService } from './../../services/singer/singer.service';
import { Banner, HotTag, SongSheet, Singer } from './../../services/data-types/common.type';
import { HomeService } from './../../services/home/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  hotTags: HotTag[];
  songSheets: SongSheet[];
  singeres: Singer[];
  carouselActiveIndex = 0;
  @ViewChild(NzCarouselComponent) private nzCarousel: NzCarouselComponent;
  constructor(
    private homeService: HomeService,
    private singerService: SingerService
  ) {
  }

  ngOnInit(): void {
    this.getBanner();
    this.getHotTag();
    this.getPersonalSheetList();
    this.getSingerList();
  }
  private getBanner(): void{
    this.homeService.getBanner().subscribe(banners => {
      this.banners = banners;
    });
  }
  private getHotTag(): void{
    this.homeService.getHotTag().subscribe(hottags => {
      this.hotTags = hottags;
    });
  }
  private getPersonalSheetList(): void{
    this.homeService.getPersonalSheetList().subscribe(songsheets => {
      this.songSheets = songsheets;
    });
  }
  private getSingerList(): void{
    this.singerService.getEnterSinger().subscribe(singer => {
      console.log(singer);
      this.singeres = singer;
    });
  }
  onBeforeChange({ to }): void{
    this.carouselActiveIndex = to;
  }

  onChangeSilde(type: 'pre' | 'next'): void{
    this.nzCarousel[type]();
  }
}
