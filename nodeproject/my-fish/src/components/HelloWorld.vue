<template>
  <div class="hello">
    <div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getList(){
      this.$axios({
        method:'get',
        dataType:'json',
        params:{
          type:11,
          name:'syvia'
        },
        url:'http://192.168.152.81:3000/'
      }).then((res)=>{
        console.log(res.data,'res')
      })
    }
  },
  mounted(){
    this.getList();
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
