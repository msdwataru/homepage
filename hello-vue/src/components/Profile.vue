<template>
  <div class="prof">
    <h1>About me</h1>
    <img @mouseover="smile" @mouseleave="leave" id="robot" :src="url">
    <div id="profile">
      <p>名前：マスダ　ワタル</p>
      <p>出身：埼玉県</p>
      <p>職歴：<a href="https://geniee.co.jp/">株式会社ジーニー</a></p>
      <p>大学の専攻：機械工学</p>
    </div>
  </div >
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      url: require("../assets/robot1-5.png")
      }
  },
  methods: {
    smile: function(event) {
      this.url = require("../assets/robot2-5.png")
    },
    leave: function(event) {
      this.url = require("../assets/robot1-5.png")
    }
  }
}
</script>

<style scoped>
#robot{
  float: left;
  width: 20%;
}
#profile{
  margin-left: 30%;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

</style>
