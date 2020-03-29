<template>
  <el-menu class="menu" mode="horizontal" background-color="#545c64" text-color="white">
  <el-menu-item index="1"><nuxt-link :to="{ name: 'index' }">Home</nuxt-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title" >Information</template>
    <el-menu-item index="2-1" @click="coming_soon">Volunteer FAQ</el-menu-item>
    <el-menu-item index="2-2" @click="coming_soon">Clinical Trials</el-menu-item>
    <el-menu-item index="2-3" @click="coming_soon">Clinical  Trial Coordinator FAQ</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title" @click="coming_soon">Healty / Post-Virus</template>
      <el-menu-item index="2-4-1" @click="coming_soon">Donate Plasmid</el-menu-item>
      <el-menu-item index="2-4-2" @click="coming_soon">Open Clinical Trials</el-menu-item>
      <el-menu-item index="2-4-3" @click="coming_soon">Other Choice</el-menu-item>
    </el-submenu>
  </el-submenu>
<el-menu-item index="4" @click="team">Our Team</el-menu-item>
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
    methods: {
      coming_soon () {
        alert('Coming Soon!')
      },
      team () {
         window.location.href = 'https://devpost.com/software/therapeutics-vaccines-and-serum-donation'
      }
    }
}
</script>

<style>
.nuxt-link {
  text-decoration: none;
}
</style>