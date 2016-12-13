<template>
  <div id="app" v-if="seen">
  <!-- v-if 判断是否存在，如果为false则不显示代码 -->
    {{age}}  
    <div v-show="show">
    <!-- v-show 判断是否展示，如果为false则display为none -->
      <ul>
        <li v-for="value,key in arr">
        <!-- v-for 进行循环数组 arr为指定循环的数组 第一个参数为数组内容，第二个参数为数组下标-->
          {{key}}:{{value}}
        </li>
      </ul>
      <ul>
        <li v-for="value,key,index in obj">
        <!-- v-for 进行循环对象 obj为指定循环的对象第一个参数为对象内容，第二个参数为对象名字，第三个位对象下标-->
          {{index}}:{{key}}:{{value}}
        </li>
      </ul>
      <ul>
        <li v-for="value,key of arr">
        <!-- es6新增语法 of -->
          {{key}}:{{value}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      age:"123",
      seen:true,
      show:true,
      arr:[{text:"A"},{text:"B"},{text:"C"}],
      obj:{
        name:"hanmy",
        age:"20",
        sex:"man"
      }
    } 
  }
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
</style>
