<template>
<div class="table-wrapper" >
  <!-- <h1>中国大陆各省级行政区舆情热度折线图</h1> -->
  <!-- 下面的:data="items"代表动态绑定 -->
  <!-- <el-table
    :data="items"
    style="width: 100% "
    border >
    <el-table-column
      type="index"
      :index="items.index">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名字"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="weibo_cont"
      label="微博内容"
      width="180"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      prop="fans_num"
      label="粉丝数量">
    </el-table-column>
    <el-table-column
      prop="comment_num"
      label="评论数量">
    </el-table-column>
    <el-table-column
      prop="praise_num"
      label="点赞数量">
    </el-table-column>
    <el-table-column
      prop="repost_num"
      label="转发数量">
    </el-table-column>
  </el-table> -->
   <div>
      <input type="text" v-model="d_city"/>
      {{ items }}
    </div>
    </div>
    
</template>
<script>
export default {
    name:'test',
      data() {
        return {
          items: [],
          d_city: '北京市'
          // 这个东西一开始是空的，但是可以在后端进行获取
        }
      },
  watch:{
	d_city :{
		handler(newValue,oldValue){
			console.log('aaaaaa')
			this.$axios({
      headers: {'content-Type': 'application/json;charset=utf-8'},
        method:'get',
        url:"http://8.131.237.67:8010/tourism_benefits/hotel_rent.php?city=" + encodeURI(this.d_city) ,
        // params: {
        //   'city': encodeURI(this.d_city)
        // // city: this.d_city
        // }
    })
    
    .then(
      response => {
        this.items = response.data
        // 将后端获取的data赋值给上面的items，并将items绑定在element-ui的列表里面
        console.log('items:::',this.items)
        // 在控制台里面输出，就可以发现传过来的对象格式
      // 对象是数组：，下面代表了数据里面的一个值
      // "id": "63937",
      // "uid": "5213461361",
      // "name": "陕西传媒网榆林频道",
      // "fans_num": "2365",
      // "weibo_id": "3933444444895280",
      // "weibo_cont": "80后大学生从大城市回到小县城，开始了自主创业之路。曾受到周围人的质疑，然而六年过去了，他拥有了一家横跨建筑设计、项目管理、农业发展、创业孵化、培训等领域的综合企业集团，全公司年营业产值达2000万... °定边80后大学生的成功创业路 创业五年累计产... ​​​​",
      // "create_time": "2016-01-20 19:34",
      // "repost_num": "0",
      // "comment_num": "0",
      // "praise_num": "0",
      // "type": "0",
      // "province": "陕西省",
      // "city": "榆林市",
      // "region": "0"
      }
    )
   
    .catch(function (error) {
        console.log(error);
    });
		
		}
	}
},
    mounted(){
  
  
          // par =  encodeURI(this.d_city)
        
    this.$axios({
      headers: {'content-Type': 'application/json;charset=utf-8'},
        method:'get',
        url:"http://8.131.237.67:8010/tourism_benefits/hotel_rent.php?city=" + encodeURI(this.d_city) ,
        // params: {
        //   'city': encodeURI(this.d_city)
        // // city: this.d_city
        // }
    })
    
    .then(
      response => {
        this.items = response
        // 将后端获取的data赋值给上面的items，并将items绑定在element-ui的列表里面
        console.log('items:::',this.items)
        // 在控制台里面输出，就可以发现传过来的对象格式
      // 对象是数组：，下面代表了数据里面的一个值
      // "id": "63937",
      // "uid": "5213461361",
      // "name": "陕西传媒网榆林频道",
      // "fans_num": "2365",
      // "weibo_id": "3933444444895280",
      // "weibo_cont": "80后大学生从大城市回到小县城，开始了自主创业之路。曾受到周围人的质疑，然而六年过去了，他拥有了一家横跨建筑设计、项目管理、农业发展、创业孵化、培训等领域的综合企业集团，全公司年营业产值达2000万... °定边80后大学生的成功创业路 创业五年累计产... ​​​​",
      // "create_time": "2016-01-20 19:34",
      // "repost_num": "0",
      // "comment_num": "0",
      // "praise_num": "0",
      // "type": "0",
      // "province": "陕西省",
      // "city": "榆林市",
      // "region": "0"
      }
    )
   
    .catch(function (error) {
        console.log(error);
    });

    },
    }
</script>

<style scoped>
.table-wrapper{
    margin-top: 101px;
}

</style>