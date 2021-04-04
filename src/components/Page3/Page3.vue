<template>
  <baidu-map class="map" center="中国" :zoom="5":scroll-wheel-zoom="true">
	  <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
	  <bml-heatmap :data="data" :max="1000" :radius="10">
  </bml-heatmap>
  </baidu-map>
</template>

<script>
import {BmlHeatmap} from 'vue-baidu-map'

export default {
  components: {
    BmlHeatmap
  },
  data () {
    return {
      data: [
        {lng: 116.418261, lat: 39.921984, count: 900},
        {lng: 118.423332, lat: 38.916532, count: 810},
        {lng: 121.7192, lat: 31.309853, count: 999}
        // ...此处添加更多的数据集
      ]
    }
  }
}
</script>
<style>
.map {
  width: 100%;
  height: 100vh;
}
</style>