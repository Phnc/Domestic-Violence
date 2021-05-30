const pieConfig = {
    type: 'pie',
    data: {
        labels: [
            '35-64',
            "30-34",
            "25-29",
            "12-17",
            "18-24",
            "65 OU MAIS",
            "00-11",
            "Não especificada",

        ],
        datasets: [{
            axis: 'y',
            label: 'Quantidade de crimes por idade',
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
                '#662404',
                '#892d04',
                '#b13c05',
                '#d45008',
                '#eb6b10',
                '#f88a1e',
                '#fda936',
                '#fec658'

            ],
            hoverOffset: 4
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

export { pieConfig }