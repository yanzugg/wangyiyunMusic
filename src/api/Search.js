//搜索模块
import request from '@/utils/request'

// 热搜关键词
export const  hotSearch = params => request({
   url:'/search/hot',
   params
})

export const SearchResultList = params => request({
  url:'/cloudsearch',
  params
})
