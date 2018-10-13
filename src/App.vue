<template>
  <div id="app">  
    <div class="wrapper">
      <MyHeader></MyHeader>
      <MyAside></MyAside>
      <div class="content-wrapper"><router-view></router-view></div>
        <router-view/>
    </div>
  </div>
</template>

<script>
import MyHeader from './component/header'
import MyAside from './component/nav'
import home from './component/home.vue'
import pemasukan from './component/pemasukan.vue'
import pengeluaran from './component/pengeluaran.vue' 
import user from './component/user.vue'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyAside,
    home,
    pemasukan,
    pengeluaran,
    user
  }
}
</script>