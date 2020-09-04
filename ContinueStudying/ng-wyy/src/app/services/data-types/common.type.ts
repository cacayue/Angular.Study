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
 * 歌单
 */
export type SongSheet = {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
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


