<template>
  <v-card class="mt-4 pt-4 pr-4 gridsize" :elevation="4">
   <apexchart 
   
      height="300" type="pie" 
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
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          
    })
}
</script>

<style lang="sass">
.gridsize
  
  justify-content: center

  width: 48% !important
</style>