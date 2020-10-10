/*
 * @Date: 2020-10-02 15:40:40
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 15:57:05
 * @FilePath: \wyy-yy\src\app\store\actions\player.action.ts
 */
import { PlayMode } from './../../share/wy-ui/wy-player/play-type';
import { Song } from './../../services/data-types/common.type';

import { createAction, props } from '@ngrx/store';
export const SetPlaying = createAction('[player] Set playing', props<{ playing: boolean}>());
export const SetPlayList = createAction('[player] Set playList', props<{ playList: Song[]}>());
export const SetSongList = createAction('[player] Set songList', props<{ songList: Song[]}>());
export const SetPlayMode = createAction('[player] Set playMode', props<{ mode: PlayMode}>());
export const SetCurrentIndex = createAction('[player] Set currentIndex', props<{ index: number}>());
