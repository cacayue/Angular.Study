import {   Singer } from '../data-types/common.type';
import {  HttpClient, HttpParams } from '@angular/common/http';
import { ServicesModule, API_CONFIG } from '../services.module';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

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
}

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
