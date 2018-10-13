<template>
  <div id="app">  
    <div class="wrapper">
      <MyHeader></MyHeader>
      <MyAside></MyAside>
      <div class="content-wrapper"></div>
        <router-view/>
    </div>
  </div>
</template>

<script>
import MyHeader from './component/header'
import MyAside from './component/nav'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyAside
  }
}
</script>