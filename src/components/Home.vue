<template>
  <div style="height:99%">
      <Headers/>
      <router-view></router-view>
      <div style="height:95%;background:#0C2B6E" v-if="page_id==='home'">运营看板</div>
   </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Headers from "./Header";
export default {
  name: 'Home',
  data () {
    return {
      screenHeight:0
    }
  },
  mounted(){
    const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenHeight = document.body.clientHeight
    //     that.screenHeight = window.screenHeight
    //   })()
    // }
  },
  computed: {
    ...mapGetters(["page_id"])
  },
  methods: {
    ...mapMutations(["updatePageId"]),
  },
  components: {
    Headers,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.header{
  width: 100%;
  height: 70px;
  background-color: #004EE6;
  display: flex;
  align-items: center;
  ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  }
  .icon{
    color: white;
    font-size: 20px;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  &:hover{
    cursor: pointer;
  }
}
.title{
    color: white;
    font-size: 24px;
    letter-spacing: 7px;
    text-align: center;
  }
.english{
    font-size: 13px;
    color: white;
  }
.titlediv,.tabdiv{
    float: left;
    margin-left: 100px;
  }
</style>
