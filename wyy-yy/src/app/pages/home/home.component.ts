import { SheetService } from './../../services/sheet.service';
/*
 * @Date: 2020-09-19 18:38:20
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:52:17
 * @FilePath: \wyy-yy\src\app\pages\home\home.component.ts
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map } from 'rxjs/internal/operators';
import { Banner, HotTag, SongSheet, Singer } from 'src/app/services/data-types/common.type';

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
      private sheetService: SheetService
    ) {
    }

    ngOnInit(): void {
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
      });
    }

}
