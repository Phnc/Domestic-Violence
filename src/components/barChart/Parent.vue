<template>
  <div class="parent">
    <bar-chart :chartData="barChartData" />
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import api from "../../services/api";

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      barChartData: [],
    };
  },
  methods: {
    async fetchCases() {
      try {
        const response = await api.get("/cases_year");
        const results = response.data;
        console.log(results);
        this.barChartData = results;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchCases()
    console.log(this.barChartData);
  },
};
</script>

<style>
  .parent {
    height: 80%;
  }
</style>