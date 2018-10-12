<template>
  <div>
    <nav-app></nav-app>
  </div>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button type="button" class="btn btn-primary" id="awe" v-on:click="showAlert">Klik ME</button>
  </div> -->
</template>

<script>
import nav from "./component/nav.vue"
export default {
  components: {
    'nav-app':nav
  }
  // name: 'app',
  // data () {
  //   return {
  //     msg: 'Welcome Kang Anton'
  //   }
  // },
  // methods: {
  //   showAlert(){
  //       // Use sweetalert2
  //       this.$swal(
  //         'Good job!',
  //         'You clicked the button!',
  //         'success'
  //       );
  //   }
  // },
  // mounted () {
  //   this.$nextTick(() => {
  //     $("#awe").click(function(e){
  //       //this.$swal("Aweeee");
  //     })
  //   });
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
