<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/img/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Comic></Comic> -->
    <Main></Main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Comic from '@/views/Comic.vue'
import Main from '@/views/Main.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    // Comic
    Main
  }
}
</script>
