<template>
  <div >
      <v-headerr></v-headerr>
      <v-aside></v-aside>
      <div class="content-box">
        <div class="content">
          <transition name="move" mode="out-in">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </div>
      </div>
      <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeaderr from './Header.vue'
  import vAside from './Aside.vue'
  import vMain from '../page/Main.vue'
  import vFooter from './Footer.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  },
  components:{
    vHeaderr,vAside,vMain,vFooter
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
