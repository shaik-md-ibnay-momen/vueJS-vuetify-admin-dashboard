<template>
  <v-card class="pa-3 size">
   <apexchart
     height='220px' width="150%"  type="bar"

     :options="options" :series="series">
   </apexchart>  

 </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {

components: {
          apexchart: VueApexCharts,
        },
    
  data: () => ({
    series: [
            {
              name: 'Actual',
              data: [
                {
                  x: '2011',
                  y: 1292,
                  goals: [
                    {
                      name: 'Expected',
                      value: 1400,
                      strokeHeight: 5,
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2012',
                  y: 4432,
                  goals: [
                    {
                      name: 'Expected',
                      value: 5400,
                      strokeHeight: 5,
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2013',
                  y: 5423,
                  goals: [
                    {
                      name: 'Expected',
                      value: 5200,
                      strokeHeight: 5,
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2014',
                  y: 6653,
                  goals: [
                    {
                      name: 'Expected',
                      value: 6500,
                      strokeHeight: 5,
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2015',
                  y: 8133,
                  goals: [
                    {
                      name: 'Expected',
                      value: 6600,
                      strokeHeight: 13,
                      strokeWidth: 0,
                      strokeLineCap: 'round',
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2016',
                  y: 7132,
                  goals: [
                    {
                      name: 'Expected',
                      value: 7500,
                      strokeHeight: 5,
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2017',
                  y: 7332,
                  goals: [
                    {
                      name: 'Expected',
                      value: 8700,
                      strokeHeight: 5,
                      strokeColor: '#775DD0'
                    }
                  ]
                },
                {
                  x: '2018',
                  y: 6553,
                  goals: [
                    {
                      name: 'Expected',
                      value: 7300,
                      strokeHeight: 2,
                      strokeDashArray: 2,
                      strokeColor: '#775DD0'
                    }
                  ]
                }
              ]
            }
          ],
          options: {
            chart: {
              height: 220,
              type: 'bar'
            },
            plotOptions: {
              bar: {
                columnWidth: '60%'
              }
            },
            colors: ['#00E396'],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ['Actual', 'Expected'],
              markers: {
                fillColors: ['#00E396', '#775DD0']
              }
            }
          },   
  })
}
</script>


<style lang="sass">
.size
  height: 250px !important
  display: flex
  justify-content: center

.chartclass
  margin: 0
  position: absolute
  top: 50%
  transform: translateY(-50%)
</style>