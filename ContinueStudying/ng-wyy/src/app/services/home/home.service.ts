import { Banner, HotTag , SongSheet } from './../data-types/common.type';
import {  HttpClient } from '@angular/common/http';
import { ServicesModule, API_CONFIG } from './../services.module';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

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
