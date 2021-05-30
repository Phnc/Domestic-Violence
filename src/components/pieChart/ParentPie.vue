<template>
  <div class="parent">
    <pie-chart :chartData="pieChartData" :labelsValues="labels" />
  </div>
</template>

<script>
import PieChart from "./PieChart";
import api from "../../services/api";

export default {
  components: {
    "pie-chart": PieChart,
  },
  data() {
    return {
      pieChartData: [],
      labels: [],
    };
  },
  methods: {
    async fetchCases() {
      try {
        const response = await api.get("/cases_age/");
        const results = response.data;
        const toPlot = results.map((obj) => {
          return obj.quantidade;
        });
        const labels = results.map((obj) => {
          return obj.idade;
        });

        console.log(toPlot);
        this.pieChartData = toPlot;
        this.labels = labels;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchCases();
    console.log(this.pieChartData);
  },
};
</script>

<style>
.parent {
  height: 80%;
}
</style>