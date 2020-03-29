<template>
<div class="madiv">
  <el-row  class="main" type="flex" justify="center" >
  <el-col ><nuxt-link to="/info"><el-button type="success"icon="el-icon-user" round>I want to help</el-button></nuxt-link><div class="grid-content bg-purple"></div></el-col>
</el-row>
  <el-row  class="main"  >
  <el-col ><el-button type="success" @click="coming_soon" icon="el-icon-office-building" round>I am a clinical trial coordinator </el-button><div class="grid-content bg-purple"></div></el-col>
</el-row>
</div>
</template>

<script>
export default {
  methods: {
    coming_soon ()
    {
      alert('Coming Soon!')
    }
  }

}
</script>

<style>

.main{
padding-top: 15px;
}

</style>