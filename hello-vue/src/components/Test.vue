<template>
  <div id="mouseover">
    <a v-on:mouseover="mouseover" v-on:mouseleave="leave">
      {{msg}}
    </a>  
  </div >
</template>

<script>
export default {
  name: 'Profile',
  data () {
    //img_src: "../assets/robot.png"
    return { 
      msg: "Hello"
      }
  },
  methods: {
    mouseover: function() {
      this.msg = "Good"  
    },
    leave: function() {
      this.msg = "Hello"  
    },
    //test: function() {
    //  this.msg = "Good"
    //}
  }
}
</script>

