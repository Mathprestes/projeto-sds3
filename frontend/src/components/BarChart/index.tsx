import Chart from "react-apexcharts";

const BarChart = () => {   //mesma coisa se usar a funcao no lugar

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        <Chart 
            options={{...options, xaxis: mockData.labels}}
            series={mockData.series} 
            type="bar"
            height="300"
        />
    );
}

export default BarChart;