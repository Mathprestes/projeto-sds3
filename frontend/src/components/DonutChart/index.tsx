import Chart from "react-apexcharts";

const DonutChart = () => {   //mesma coisa se usar a funcao no lugar

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
            options={{...options, labels: mockData.labels}}
            series={mockData.series} 
            type="donut"
            height="300"
        />
    );
}

export default DonutChart;