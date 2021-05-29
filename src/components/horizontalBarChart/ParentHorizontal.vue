<template>
  <div class="parent">
    <bar-chart :chartData="barChartData" :labelsValues="labels" />
  </div>
</template>

<script>
import HorizontalBarChart from "./HorizontalBarChart";
import api from "../../services/api";

export default {
  components: {
    "bar-chart": HorizontalBarChart,
  },
  data() {
    return {
      barChartData: [],
      labels: [],
    };
  },
  methods: {
    async fetchCases() {
      try {
        const response = await api.get("/nature/");
        const results = response.data;
        const toPlot = results.map((obj) => {
          return obj.quantidade;
        });
        const labels = results.map((obj) => {
          return obj.natureza.replace("POR VIOLÊNCIA DOMÉSTICA/FAMILIAR", "");
        });

        console.log(toPlot);
        this.barChartData = toPlot;
        this.labels = labels;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchCases();
    console.log(this.barChartData);
  },
};
</script>

<style>
.parent {
  height: 80%;
}
</style>