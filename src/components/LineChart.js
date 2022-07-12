import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const LineChart = (props) => {
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
                backgroundColor: ['rgba(49, 85, 133, 0.42)'],
                pointBackgroundColor:  ['rgba(2, 30, 68, 0.77)'],
                pointBorderColor: ['rgba(2, 30, 68, 0.77)'],
                fill: true
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Line Chart for Policy Analysis',
            }
        }
    }
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart