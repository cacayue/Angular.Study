import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Banner, HotTag, SongSheet, Singer } from './../../services/data-types/common.type';
import { SingerService } from 'src/app/services/singer/singer.service';
import { HomeService } from 'src/app/services/home/home.service';
import { first } from 'rxjs/internal/operators';

type HomeDataType = [Banner[],HotTag[],SongSheet[],Singer[]];

@Injectable()
export class HomeResolverService implements Resolve<HomeDataType>{

constructor(
  private homeService: HomeService,
  private singerService: SingerService,
) { }

resolve(): Observable<HomeDataType>{
  return forkJoin([
    this.homeService.getBanner(),
    this.homeService.getHotTag(),
    this.homeService.getPersonalSheetList(),
    this.singerService.getEnterSinger(),
  ]).pipe(first());
}
}
