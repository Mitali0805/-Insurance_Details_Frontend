import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const BarChart = (props) => {
    const { policies } = props;
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
                label: 'No of Policies',
                data: policies,
                borderColor: ['rgba(2, 30, 68, 0.77)'],
                backgroundColor: ['rgba(2, 30, 68, 0.77)'],
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                font: { weight: 'bold' },
                text: 'Bar Chart for Policy Analysis',
            }    
        }    
    }
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart