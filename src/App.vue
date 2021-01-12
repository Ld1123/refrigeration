<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul li{
    margin: 0;
    padding: 0;
}

li{
    list-style: none;
}

img{
    border: 0;
    vertical-align: middle;
}

button{
    cursor: pointer;
}

a{
    color: #666;
    text-decoration: none;
}


em,
i{
    font-style: normal;
}

button,
input{
    border: 0;
    outline: none;
}


</style>
