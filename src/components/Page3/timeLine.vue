<template>
  <!--时间线-->
  <div style="display: flex">
    <!-- 当日志记录不超过9个，全排列 -->
    <div class="container" v-if="timeLineList.length < 12">
      <div style="display: flex">
        <div style="flex: 1; display: flex; flex-direction: column">
          <div style="flex: 1; display: flex">
            <div style="flex: 1"></div>
            <el-tooltip effect="light" placement="top-start">
              <div slot="content">{{ timeLineList[0].info }}</div>
              <div
                class="dot"
                @mouseover="changeActive(0)"
                :class="{ active: 0 === timeIndex }"
              ></div>
            </el-tooltip>

            <div class="item"></div>
          </div>
          <div class="item_bottom">
            <span>{{ timeLineList[0].timestamp }}</span>
          </div>
        </div>
        <div
          v-for="(item, index) in timeLineList"
          :key="index"
          v-if="index >= 0 && index < timeLineList.length"
          style="flex: 1; display: flex; flex-direction: column"
        >
          <div style="flex: 1; display: flex">
            <div class="item"></div>
            <el-tooltip effect="light" placement="top">
              <div slot="content">{{ timeLineList[index].info }}</div>
              <div
                class="dot"
                @mouseover="changeActive(index)"
                :class="{ active: index === timeIndex }"
              ></div>
            </el-tooltip>
            <div class="item"></div>
          </div>
          <div class="item_bottom">
            <span>{{ timeLineList[index].timestamp }}</span>
          </div>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column">
          <div style="flex: 1; display: flex">
            <div class="item"></div>
            <el-tooltip effect="light" placement="top-end">
              <div slot="content">
                {{ timeLineList[timeLineList.length - 1].info }}
              </div>
              <div
                class="dot"
                @mouseover="changeActive(timeLineList.length - 1)"
                :class="{ active: timeLineList.length - 1 === timeIndex }"
              ></div>
            </el-tooltip>
            <div style="flex: 1"></div>
          </div>
          <div class="item_bottom">
            <span>{{ timeLineList[timeLineList.length - 1].timestamp }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 当日志记录超过8个，可以左右滑动 -->
    <div class="container" v-else>
      <div style="display: flex">
        <div style="flex: 1; display: flex; flex-direction: column">
          <div style="flex: 1; display: flex">
            <div style="flex: 1"></div>
            <div
              class="move-button el-icon-arrow-left"
              v-bind:class="{ active: left_button_active }"
              :disabled="left_button_disabled"
              @click="moveLeft()"
            ></div>
            <div class="item"></div>
          </div>
          <div class="item_bottom">
            <span style="color: white">左</span>
          </div>
        </div>

        <div
          v-for="(item, index) in timeLineList"
          :key="index"
          v-if="index >= point && index <= point_end"
          style="flex: 1; display: flex; flex-direction: column"
        >
          <div style="flex: 1; display: flex">
            <div class="item"></div>
            <el-tooltip effect="light" placement="top">
              <div slot="content">{{ timeLineList[index].info }}</div>
              <div
                class="dot"
                @mouseover="changeActive(index)"
                :class="{ active: index === timeIndex }"
              ></div>
            </el-tooltip>
            <div class="item"></div>
          </div>
          <div class="item_bottom">
            <span>{{ timeLineList[index].timestamp }}</span>
          </div>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column">
          <div style="flex: 1; display: flex">
            <div class="item"></div>
            <div
              class="move-button el-icon-arrow-right"
              v-bind:class="{ active: right_button_active }"
              :disabled="right_button_disabled"
              @click="moveRight()"
            ></div>
            <div style="flex: 1"></div>
          </div>
          <div class="item_bottom">
            <span style="color: white">右</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  props: ["timeLineList"],
  data() {
    return {
      timeIndex: 0, //默认当前选择的为最近的时间点
      point: 0, //时间轴只展示6个,初始为最后6个
      point_end: 10,
      right_button_active: false,
      left_button_active: true,
      left_button_disabled: false,
      right_button_disabled: true,
    };
  },
  
  watch: {
    timeLineList: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
        // do something, 可使用this
        this.$emit("activeChange", this.timeLineList[0].timestamp);
        console.log("🚀 ~ file: timeLine.vue ~ line 151 ~ handler ~ activeChange", activeChange)
      },
      deep: true,
    },
  },
  methods: {
    changeActive(index) {
      this.timeIndex = index;
      //   console.log("悬浮选择的时间点：", this.timeIndex);
      this.$emit("activeChange", this.timeLineList[index].timestamp);
    },

    moveLeft() {
      if (this.point > 0) {
        this.point -= 1;
        this.point_end -= 1;
        this.timeIndex -= 1;
        this.right_button_disabled = false;
        this.right_button_active = true;
        if (this.point === 0) {
          //如果移到第一个时间点，设置左按钮不可点击
          this.left_button_disabled = true;
          this.left_button_active = false;
        }
      }
    },
    moveRight() {
      if (this.point_end < this.timeLineList.length - 1) {
        this.point += 1;
        this.point_end += 1;
        this.timeIndex += 1;
        this.left_button_disabled = false;
        this.left_button_active = true;
        console.log("————————————", this.timeIndex);
        if (this.point_end === this.timeLineList.length - 1) {
          //如果移到最后一个时间点，设置右按钮不可点击
          this.right_button_disabled = true;
          this.right_button_active = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  height: 30px;
  margin-left: 0px;
  padding-left: 0px;
  margin-bottom: 5px;
}
.dot {
  border: 2px solid #dcdfe6;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: white;
  margin: 2px 0px;
  box-sizing: border-box;
}
.item {
  flex: 1;
  border-bottom: 1px solid #dcdfe6;
  margin-bottom: 9px;
  box-sizing: border-box;
}
.item_bottom {
  flex: 1;
  text-align: center;
  height: 15px;
  margin-top: 7px;
  font-size: 14px;
}
.move-button {
  border: 2px solid #dcdfe6;
  width: 40px;
  height: 19px;
  border-radius: 19px;
  background: white;
  text-align: center;
  box-sizing: border-box;
}
.active {
  background-color: #fff !important;
  border: 2px solid #67c23a;
}
</style>