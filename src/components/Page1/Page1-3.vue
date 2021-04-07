<template>
<div class="table-wrapper" >
  <h1>分省份星级饭店经营情况统计表（季度）（北京市，其他省份陆续更新中）</h1>
  <!-- <el-select v-model="d_city" filterable placeholder="请选择地区">
    <el-option
      v-for="item in options"
      :key="item.d_city"
      :label="item.label"
      :value="item.d_city">
    </el-option>
  </el-select> -->
  <el-table
    :data="items"
    height="500"
    style="width: 100% "
    border >
    <el-table-column
      type="index"
      :index="items.index">
    </el-table-column>
    <el-table-column
      prop="SgnQuarter"
      label="SgnQuarter"
      width="110"
      >
    </el-table-column>
    <el-table-column
      prop="Area"
      label="Area"
      width="80"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      prop="BusinessRevenue"
      label="BusinessRevenue"
      width="145">
    </el-table-column>
    <el-table-column
      prop="RestaurantPercentage"
      label="RestaurantPercentage"
      width="145">
    </el-table-column>
    <el-table-column
      prop="RoomPercentage"
      label="RoomPercentage">
    </el-table-column>
    <el-table-column
      prop="AveragePrice"
      label="AveragePrice">
    </el-table-column>
    <el-table-column
      prop="OccupancyRate"
      label="OccupancyRate">
    </el-table-column>
    <el-table-column
      prop="PerAvaiRoomRevenue"
      label="PerAvaiRoomRevenue">
    </el-table-column>
    <el-table-column
      prop="PerRoomBusRevenue"
      label="PerRoomBusRevenue">
    </el-table-column>
    <el-table-column
      prop="AveragePriceYOY"
      label="AveragePriceYOY">
    </el-table-column>
</el-table>   
</div>
</template>

<script>
export default {
    name:'test',
      data() {
        return {
        options: [{
          d_city:'北京市',
          label: '北京市'
        }, {
          d_city: '天津市',
          label: '天津市'
        }, {
          d_city: '选项3',
          label: '河北省'
        }, {
          d_city: '选项4',
          label: '广东省'
        }, {
          d_city: '上海市',
          label: '上海市'
        }],
        d_city: '',
          items: []
        }
      },
    watch:{
	d_city :{
		handler(newValue,oldValue){
			console.log('aaaaaa')
			this.$axios({
      headers: {'content-Type': 'application/json;charset=utf-8'},
        method:'get',
        url:"http://8.131.237.67:8010/tourism_benefits/area_star_hotel.php?city=北京市"
    })
    
    .then(
      response => {
        this.items = response.data
        // 将后端获取的data赋值给上面的items，并将items绑定在element-ui的列表里面
        console.log('items:::',this.items)
      }
    )
   
    .catch(function (error) {
        console.log(error);
    });
		
		}
	}
},

    mounted(){
    this.$axios({
        method:'get',
        url:"/tourism_benefits/area_star_hotel.php?prov=北京市"
    })
    .then(
      response => {
        this.items = response.data
        console.log(this.items)
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