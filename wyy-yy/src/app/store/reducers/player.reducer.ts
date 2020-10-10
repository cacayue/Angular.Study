import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { Song } from 'src/app/services/data-types/common.type';
import { PlayMode } from 'src/app/share/wy-ui/wy-player/play-type';
import { SetCurrentIndex, SetPlaying, SetPlayList, SetPlayMode, SetSongList } from '../actions/player.action';

/*
 * @Date: 2020-10-02 15:19:32
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 16:05:24
 * @FilePath: \wyy-yy\src\app\store\reducers\player.reducer.ts
 */
export type PlayState = {
  // 播放状态
  playing: boolean;
  // 播放模式
  playMode: PlayMode;
  // 歌曲列表
  songList: Song[];
  // 播放列表
  playList: Song[];
  // 当前播放索引
  currentIndex: number;
};

export const initialState: PlayState = {
  playing: false,
  playMode: { type: 'loop', label: '循环'},
  songList: [],
  playList: [],
  currentIndex: -1,
};

const reducer = createReducer(
  initialState,
  on(SetPlaying, (state, { playing }) => ({ ...state, playing})),
  on(SetPlayList, (state, { playList }) => ({ ...state, playList})),
  on(SetSongList, (state, { songList }) => ({ ...state, songList})),
  on(SetPlayMode, (state, { mode }) => ({ ...state, mode})),
  on(SetCurrentIndex, (state, { index }) => ({ ...state, index})),
);

export function playReducer(state: PlayState, action: Action) {
  return reducer(state, action);
}
