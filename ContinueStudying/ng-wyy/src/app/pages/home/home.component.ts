/*
 * @Date: 2020-09-19 09:00:22
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 10:26:21
 * @FilePath: \Angular.Study\ContinueStudying\ng-wyy\src\app\pages\home\home.component.ts
 */
import { SongService } from './../../services/song.service';
import { SheetService } from './../../services/sheet.service';
import { map } from 'rxjs/internal/operators';
import { ActivatedRoute } from '@angular/router';
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
    private router: ActivatedRoute,
    private sheetService: SheetService,
    private songService: SongService
  ) {
  }

  ngOnInit(): void {
    console.log('首页启动');
    this.router.data.pipe(map(res => res.homeDatas))
    .subscribe(([banner, hottag, songsheet, singer]) => {
      this.banners = banner;
      this.hotTags = hottag;
      this.songSheets = songsheet;
      this.singeres = singer;
    });
  }
  onBeforeChange({ to }): void{
    this.carouselActiveIndex = to;
  }

  onChangeSilde(type: 'pre' | 'next'): void{
    this.nzCarousel[type]();
  }

  playSheet(id: number): void{
    this.sheetService.playSheet(id).subscribe(res => {
        console.log(res);
    });
  }
}
