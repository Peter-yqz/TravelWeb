<template>
<div>
    <span class="demonstration">请选择地区</span>
    <el-select v-model="value" filterable placeholder="请选择地区">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '北京'
        }, {
          value: '选项2',
          label: '天津'
        }, {
          value: '选项3',
          label: '上海'
        }, {
          value: '选项4',
          label: '广州'
        }, {
          value: '选项5',
          label: '深圳'
        }],
        value: ''
      }
    }
  }
</script>
