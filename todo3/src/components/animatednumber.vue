<template>
  <div id="app">
  <h2>Vue animation counter</h2>
  <div id="wrapper">
    <number
    class="bold transition"
    :class="{scaleBig: scaleClass}"
    ref="number2"
    :from="numberFrom"
    :format="theFormat"
    animationPaused
	  :to="numberTo"
	  :duration="duration"
    easing="Power4.easeOut"
    @complete="completed"/>
  </div>
    <label>To:</label>
    <input type="number" v-model="numberTo"/>
  <div>
    <button class="btn green" @click="playAnimation">Start</button>
    <button class="btn" @click="$refs.number2.pause()">Pause</button>
    <button class="btn blue" @click="$refs.number2.restart()">Restart</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      numberFrom: 0,
      numberTo: 5000,
      duration: 5,
      scaleClass: false
    };
  },
  methods: {
    theFormat(number) {
      return number.toFixed(2);
    },
    completed() {
      console.log("Animation ends!");
      this.scaleClass = true;
    },
    playAnimation() {
      console.log("Animation starts!");
      this.scaleClass = false;
      this.$refs.number2.play();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bold {
  font-weight: bold;
  font-size: 25px;
}
.transition {
  transition: all 0.3s ease-in;
}
label {
  width: 100px;
  display: inline-block;
}
.scaleBig {
  font-size: 35px;
}
#wrapper {
  width: 150px;
  display: inline-block;
  padding: 20px 0;
  border-radius: 15px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.18);
}
input {
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
.btn {
  outline: none;
  cursor: pointer;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 5px;
  color: #fff;
  background-color: #7b68ee;
  box-shadow: 0 3px 8px 0 rgba(65, 105, 225, 0.18);
  display: inline-block;
  border: 0;
  padding: 10px 14px;
  font-size: 14px;
  transition: all 0.1s ease-in;
  margin: 15px;
}
.green {
  background-color: mediumseagreen;
}
.blue {
  background-color: royalblue;
}
</style>
