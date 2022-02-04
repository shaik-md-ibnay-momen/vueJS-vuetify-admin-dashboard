<template>
  <v-card class="pa-3 size">
   <apexchart 
     height='220px' type="area" 
     :options="options" :series="series">
   </apexchart>  
 </v-card>
</template>

<script>
export default {
  
  name: 'HelloWorld',
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },

    

      xaxis: {
        categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
        ]
      }
    },
    series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
  })
}
</script>
    
<style lang="sass">
.size
  height: 250px !important
</style>


 