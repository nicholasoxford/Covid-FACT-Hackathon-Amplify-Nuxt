<template>
  <el-menu class="menu" mode="horizontal" background-color="#545c64" text-color="white">
  <el-menu-item index="1">Home</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Information</template>
    <el-menu-item index="2-1">Latest Corona News</el-menu-item>
    <el-menu-item index="2-2">Clinical Trials</el-menu-item>
    <el-menu-item index="2-3">Hospital Equipment</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">Healty / Post-Virus</template>
      <el-menu-item index="2-4-1">Donate Plasmid</el-menu-item>
      <el-menu-item index="2-4-2">Open Clinical Trials</el-menu-item>
      <el-menu-item index="2-4-3">Other Choice</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">Support</el-menu-item>
<el-menu-item index="4">Contact</el-menu-item>
<el-menu-item v-if="!signedIn" index="5" style="float: right; padding-right: 3px 0">Sign Up</el-menu-item>
</el-menu>
</template>

<script>
export default {
    props: {
        signedIn: {
      value: Boolean,
      default: false
    },
    },

        data() {
      return {
        activeIndex: '1',
      };
    },
}
</script>

<style>

</style>