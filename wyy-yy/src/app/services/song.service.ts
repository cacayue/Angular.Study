/*
 * @Date: 2020-09-19 19:40:07
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:51:55
 * @FilePath: \wyy-yy\src\app\services\song.service.ts
 */
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { ServicesModule, API_CONFIG } from './services.module';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SongUrl, Song } from './data-types/common.type';

@Injectable({
  providedIn: ServicesModule
})
export class SongService {

constructor(
  private http: HttpClient,
  @Inject(API_CONFIG) private uri: string
) { }

  getSongUrl(ids: string): Observable<SongUrl[]>{
    const params = new HttpParams().set('id', ids);
    return this.http.get(this.uri + 'song/url' , { params })
      .pipe(map((res: { data: SongUrl[] }) => res.data));
  }

  getSongList(songs: Song | Song[]): Observable<Song[]>{
    const songArr = Array.isArray(songs) ? songs.slice() : [songs];
    const ids = songArr.map( item => item.id).join(',');
    return this.getSongUrl(ids).pipe(map(urls => this.generateSong(songArr, urls)));
  }

  generateSong(songs: Song[], urls: SongUrl[]): Song[] {
    const result = [];
    songs.forEach(song => {
      const url = urls.find(u => u.id === song.id);
      if (url){
        result.push({...song , url});
      }
    });
    return result;
  }
}
