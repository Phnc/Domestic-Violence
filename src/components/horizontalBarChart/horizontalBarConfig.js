/*const labels = [
    'AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'CALÚNIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'CÁRCERE PRIVADO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'CONSTRANGIMENTO ILEGAL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'DANO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'DIFAMAÇÃO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'ESTUPRO DE VULNERÁVEL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'ESTUPRO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'LESÃO CORPORAL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'MAUS TRATOS POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'OUTROS CRIMES POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'PERTURBAÇÃO DO SOSSEGO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
    'VIAS DE FATOS POR VIOLÊNCIA DOMÉSTICA/FAMILIAR'
];
const data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'Quantidade de crimes por natureza',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};


const horizontalBarConfig = {
    type: 'bar',
    data,
    options: {
      indexAxis: 'y',
    }
  };*/


const horizontalBarConfig = {
    type: 'horizontalBar',
    data: {
        labels: [
            'AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'CALÚNIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'CÁRCERE PRIVADO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'CONSTRANGIMENTO ILEGAL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'DANO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'DIFAMAÇÃO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'ESTUPRO DE VULNERÁVEL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'ESTUPRO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'LESÃO CORPORAL POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'MAUS TRATOS POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'OUTROS CRIMES POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'PERTURBAÇÃO DO SOSSEGO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR',
            'VIAS DE FATOS POR VIOLÊNCIA DOMÉSTICA/FAMILIAR'
        ],
        datasets: [{
            axis: 'y',
            label: 'Quantidade de crimes por natureza',
            data: [],
            fill: false,
            backgroundColor: [
                '#662404',
                '#892d04',
                '#b13c05',
                '#d45008',
                '#eb6b10',
                '#f88a1e',
                '#fda936',
                '#fec658',
                '#ffdd81',
                '#ffeeaa',
                '#fff9cc',
                '#fffad0',
                '#fff2b5',
                '#ffffe4'
            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        /*scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Quantidade'
                }
            }]
        },*/
        responsive: true,
        maintainAspectRatio: false
    }
}

export { horizontalBarConfig }