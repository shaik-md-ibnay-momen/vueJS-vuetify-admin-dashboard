<template>
  <div>
    <animated-number :value="value" :formatValue="formatToPrice" :duration="duration"/>
    <hr>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      value: 10000,
      duration: 1000
    };
  },
  methods: {
    formatToPrice(value) {
      return `<h3>$ ${Number(value).toFixed(2)}</h1>`;
    },
  }
};
</script>