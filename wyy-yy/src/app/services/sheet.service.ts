/*
 * @Date: 2020-09-19 19:37:46
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:40:40
 * @FilePath: \wyy-yy\src\app\services\sheet.service.ts
 */

import { switchMap } from 'rxjs/operators';
import { map, pluck } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicesModule, API_CONFIG } from './services.module';
import { Injectable, Inject } from '@angular/core';
import { SongSheet, Song } from './data-types/common.type';
import { SongService } from './song.service';

@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
    private songService: SongService
  ) { }

  getSongSheetDetail(id: number): Observable<SongSheet>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: { playlist: SongSheet }) => res.playlist));
  }

  playSheet(id: number): Observable<Song[]>{
    return this.getSongSheetDetail(id).pipe(pluck('tracks'),
    switchMap(tracks => this.songService.getSongList(tracks)));
  }
}
