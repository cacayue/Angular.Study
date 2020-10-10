/*
 * @Date: 2020-09-19 18:29:33
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 18:29:37
 * @FilePath: \wyy-yy\src\app\services\data-types\common.type.ts
 */
export type Banner = {
  targetId: number;
  imageUrl: string;
  url: string;
};

/**
 * 热门标签
 */
export type HotTag = {
  id: number;
  position: number;
  name: string;
};

/**
 * 歌手
 */
export type Singer = {
  id: number;
  name: string;
  picUrl: string;
  albumSize: number;
};


/**
 * 歌曲
 */
export type Song = {
  id: number;
  name: string;
  url: string;
  ar: Singer[];
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
  dt: number;
};

/**
 * 歌单
 */
export type SongSheet = {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  tracks: Song[];
};

/**
 * 歌曲详情
 */
export type SongUrl = {
  id: number;
  url: string;
};
