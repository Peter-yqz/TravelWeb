<template>
<div class="container">
    <h1 style="text-align: center">XXX数据统计可视化平台</h1>
    <el-carousel :interval="4000" type="card" height="400px" width='600px'>
    <el-carousel-item v-for="item in imagesbox" :key="item.id">
    <img :src="item.idView" class="image">
    </el-carousel-item>
    </el-carousel>
    <div>
        <p><i class="el-icon-message"></i>is the main text.</p>
        <p><i class="el-icon-message"></i>is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
        <p> is the main text.</p>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return {
                imagesbox:[
                {id:0,idView:require("../../assets/pic1.jpg")},      
                {id:1,idView:require("../../assets/pic2.jpg")},
                {id:2,idView:require("../../assets/pic3.jpg")}
                ]
            }
        }
    }
</script>

<style scoped>
.container{
    background-color: rgb(200, 218, 218);
    box-sizing: border-box;
}
</style>