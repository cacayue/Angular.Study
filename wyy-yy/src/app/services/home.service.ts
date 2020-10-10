/*
 * @Date: 2020-09-19 18:26:41
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 18:30:25
 * @FilePath: \wyy-yy\src\app\services\home.service.ts
 */
import { API_CONFIG, ServicesModule } from './services.module';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Banner, HotTag, SongSheet } from './data-types/common.type';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
  ) { }

  getBanner(): Observable<Banner[]>{
    return this.http.get( this.uri + 'banner')
      .pipe(map((res: { banners: Banner[]}) => res.banners));
  }

  getHotTag(): Observable<HotTag[]>{
    return this.http.get( this.uri + 'playlist/hot')
      .pipe(map((res: { tags: HotTag[]}) => {
        return res.tags.sort((x: HotTag, y: HotTag) => x.position - y.position).slice(0, 5);
      }));
  }

  getPersonalSheetList(): Observable<SongSheet[]>{
    return this.http.get( this.uri + 'personalized')
    .pipe(map((res: { result: SongSheet[]}) => res.result.slice(0, 16)));
  }
}
