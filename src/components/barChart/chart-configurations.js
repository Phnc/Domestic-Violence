const sampleBarConfig = {
    type: 'bar',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      datasets: [{
        label: 'Número de casos de violência por ano',
        data: [],
        backgroundColor: [
          'rgba(248,118,109,255)',
          'rgba(248,118,109,255)',
          'rgba(248,118,109,255)',
          'rgba(248,118,109,255)',
          'rgba(248,118,109,255)',
          'rgba(248,118,109,255)',
          'rgba(248,118,109,255)'
        ],
        borderColor: [
          'rgba(248,118,109,1)',
          'rgba(248,118,109,1)',
          'rgba(248,118,109,1)',
          'rgba(248,118,109,1)',
          'rgba(248,118,109,1)',
          'rgba(248,118,109,1)',
          'rgba(248,118,109,1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Quantidade'
          }
        }]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }
  
  export { sampleBarConfig }