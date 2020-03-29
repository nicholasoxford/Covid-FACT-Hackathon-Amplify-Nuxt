<template>
<div class="main">
  <el-row :gutter="18" class="main" type="flex" justify="center">
  <el-col :span="6"><nuxt-link to="/info"><el-button type="success" round>I want to help clinical trials</el-button></nuxt-link><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><el-button class="middle" type="success" round>I am healthy / I've had  the  virus</el-button><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><el-button type="success" round>I am Health Care professional </el-button><div class="grid-content bg-purple"></div></el-col>
</el-row>
</div>
</template>

<script>
export default {

}
</script>

<style>
.col1 {
    align-content: center;
    width: 75px

}

</style>