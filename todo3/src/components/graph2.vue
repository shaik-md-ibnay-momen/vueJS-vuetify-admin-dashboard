<template>
  <v-card class="pa-3 size" >
   <apexchart 
      height='400px' type="pie" 
      class="chartclass"
     :options="options" :series="series">
   </apexchart>  
</v-card>
</template>

<script>
export default {
    data: () => ({
      series: [44, 55, 13, 43, 22],
          options: {
            chart: {
           
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
         
          },
          
    })
}
</script>
<style lang="sass">
.size
  height: 350px !important
  display: flex
  justify-content: center
.chartclass
  margin: 0
  position: absolute
  top: 50%
  transform: translateY(-50%)
</style>