<template>
  <v-card class="pa-3 size" >
   <apexchart 
      height='250px' type="pie" 
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
  height: 250px !important
</style>