<template>
  <div id="app">
    <div id="header">
      <router-link class="pages" to="/">About me</router-link>
      <router-link class="pages" to="/skill">Skill</router-link>
    </div>
    <!--img src="./assets/logo.png"-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
}
#header {
  margin-top: -30px;
  margin-left: -28px;
  margin-right: -28px;
  height: 40px;
  background: rgb(13, 180, 202);
}
.pages {
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  margin-left: 3%;
  line-height: 40px;

}
.pages:hover {
  text-decoration: underline;
}
</style>
