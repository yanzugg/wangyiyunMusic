//api文件夹下 各个请求模块js，都统一来到index.js再向外导出
import { recommendMusic,newMusic} from "./Home";
export const recommendMusicAPI = recommendMusic  //请求推荐歌单的方法导出

export const newMusicAPI = newMusic  // 首页-最新音乐

import {hotSearch,SearchResultList} from './Search'
export const hotSearchAPI = hotSearch  //搜索 -热搜关键词
export const SearchResultListAPI = SearchResultList

import {getSongById,getLyricById} from './Play'
export const getSongByIdAPI = getSongById //获取歌曲播放地址
export const getLyricByIdAPI = getLyricById //获取歌词数据

