<template>
<div class="table-wrapper" >
  <h1>酒店出租情况表</h1>
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
      label="季度起点"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="BusinessRevenue"
      label="BusinessRevenue"
      width="180"
      <!-- show-overflow-tooltip -->
      >
    </el-table-column>
    <el-table-column
      prop="RestaurantPercentage"
      label="RestaurantPercentage">
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
    </el-table-column><el-table-column
      prop="PerRoomBusRevenue"
      label="PerRoomBusRevenue">
    </el-table-column><el-table-column
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
          items: []
        }
      },
    mounted(){
    this.$axios({
        method:'get',
        url:"/tourism_benefits/hotel_rent.php?city=北京市"
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