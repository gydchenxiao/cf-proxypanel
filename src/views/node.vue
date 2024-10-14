<template>
    <div>
      <h1>流量使用</h1>
      <div ref="chart" style="width: 100%; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  
  export default {
    name: 'FlowChartView',
    setup() {
      const chart = ref(null);
  
      onMounted(() => {
        const myChart = echarts.init(chart.value);
  
        // 生成一个月的日期
        const days = Array.from({ length: 30 }, (_, i) => `2024-10-${(i + 1).toString().padStart(2, '0')}`);
  
        const trafficData = Array.from({ length: 30 }, () => (Math.random() * 18 + 2).toFixed(2));
  
        const option = {
          title: {
            text: '流量明细',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{b0}: {c0}GB'
          },
          xAxis: {
            type: 'category',
            data: days
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: function (value) {
                return value > 1 ? `${value.toFixed(2)}GB` : `${(value * 1024).toFixed(2)}MB`;
              }
            }
          },
          series: [
            {
              name: '流量',
              type: 'line',
              smooth: true,
              data: trafficData,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(0, 160, 221, 0.8)' },
                  { offset: 1, color: 'rgba(0, 160, 221, 0)' }
                ])
              },
              lineStyle: {
                color: '#00A0DD'
              }
            }
          ]
        };
        myChart.setOption(option);
  
        // 监听窗口大小变化，自动调整图表大小
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      });
  
      return {
        chart
      };
    }
  };
  </script>
  
  <style>
  /* 可根据需要添加样式 */
  </style>
  