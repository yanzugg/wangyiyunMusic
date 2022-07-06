<template>
   <div>
     <van-cell center :title="name"  :label="authour+ ' - ' +name" >
       <template #right-icon>
    <van-icon name="play-circle-o" size="0.7rem" @click="playFn"/>
  </template>
    </van-cell>
   </div>
</template>

<script>
export default {
    props:{
      name:String,
      authour:String,
      id:Number
    },
    methods: {
      playFn(){
        this.$router.push({
          path:'/play',
          query:{
            id:this.id //歌曲id，通过路由跳转传递过去
          }
        })
      }
    }
}
</script>

<style scoped> 
.van-cell{
  border-bottom: 1px solid lightgray;
}
</style>