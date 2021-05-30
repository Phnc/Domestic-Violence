<template>
  <div class="chart-test">
    <canvas id="chart-canvas" width="100%" height="100%" ref="chartref"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import { pieConfig } from "./pieConfig.js";

export default {
  data() {
    return {
      chartObj: null,
      chartConfig: pieConfig,
    };
  },
  props: {
    chartData: {
      type: Array,
      required: true,
    },
    labelsValues: {
      type: Array,
      required: true,
    }
  },
  methods: {
    setChartData() {
      this.chartConfig.data.datasets[0].data = this.chartData;
      this.chartConfig.data.labels = this.labelsValues;
    },
  },
  mounted() {
    this.setChartData();
    this.chartObj = new Chart(this.$refs.chartref, this.chartConfig);
  },
  watch: {
    chartData: function () {
      this.setChartData();
      this.chartObj = new Chart(this.$refs.chartref, this.chartConfig);
    },
    labelsValues: function () {
      this.setChartData();
      this.chartObj = new Chart(this.$refs.chartref, this.chartConfig);
    },
  },
  // beforeDestroy() {
  //   // This necessary if canvas is reused for a new chart
  //   this.chartObj.destroy();
  // }
};
</script>

<style>
  .chart-test{
    height: inherit;
  }
  .chartjs-size-monitor {
    height: inherit;
    width: inherit;
  }
</style>