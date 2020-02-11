<template>
  <div class="header">
    <div class="titlediv">
      <div class="title">建筑能源系统运管平台</div>
      <div class="english">The Management Platform Of Building Enenrgy Operation</div>
    </div>
    <div  class="tabdiv">
      <ul>
         <router-link v-for="(item,i) in linkList" :key="i" tag="li" :to="item.to" >
           <div @click="choseRouter(item.to)">
            <div><span class="icon iconfont" >&#xe69b;</span></div>
            <span>{{item.name}}</span>
           </div>
         </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: 'Header',
  data () {
    return {
       linkList:[
        {name:'运营看板',to:'/home',icon:'iconhome'},
        {name:'监测管理',to:'/monitor',icon:'iconproduction'},
        {name:'能耗管理',to:'/energy',icon:'iconmanagement'},
        {name:'报表管理',to:'/table',icon:'icondataInput'},
        {name:'系统设置',to:'/system',icon:'iconpdm'},
      ]
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['page_id'])
  },
  methods: {
    ...mapMutations(['updatePageId']),
    choseRouter(to){
      let id=to.slice(1)
      this.updatePageId(id);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.header{
  width: 100%;
  height: 8%;
  background-color: #004EE6;
  display: flex;
  align-items: center;
  ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  text-align:center;
  }
  .icon{
    color: white;
    font-size: 35px;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: white;
    text-decoration: none;
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
    color: white;
  }
</style>
