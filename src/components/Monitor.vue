<template>
   <div>
      <div>监测模块</div>
   </div>
</template>

<script>
import Headers from "./Header";
export default {
  name: 'Monitor',
  data () {
    return {
    }
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
    width: 30px;
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
  }
</style>
