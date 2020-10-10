import { API_CONFIG, ServicesModule } from './services.module';
/*
 * @Date: 2020-09-19 19:12:01
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:14:34
 * @FilePath: \wyy-yy\src\app\services\singer.service.ts
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Singer } from './data-types/common.type';
import queryString from 'query-string';
import { map } from 'rxjs/internal/operators';

/**
 * 歌手查询参数
 */
type SingerParams = {
  offset: number;
  limit: number;
  cat?: string;
};

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
};

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string
  ) { }

  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]>{
    const param = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get( this.uri + 'artist/list', {  params: param })
      .pipe(map((res: { artists: Singer[]}) => res.artists));
  }

}
