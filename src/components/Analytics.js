import { useEffect, useState } from 'react';
import { Box, Paper } from '@material-ui/core'

import InsuranceService from '../Service/InsuranceService';
import LineChart from './LineChart';
import './Analytics.css'
import BarChart from './BarChart';
import InsuranceDrawer from './Drawer';

const Analytics = () => {
    const [policyCount, setPolicyCount] = useState([]);

    useEffect(() => {
        InsuranceService.getAnalyticalData()
            .then((res) => {
                setPolicyCount(res)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <Box className='box1'>
            <Paper elevation={0}>
                <div className='chart'>
                    <InsuranceDrawer />
                    <LineChart policies={policyCount} />
                    <BarChart policies={policyCount} />
                </div>
            </Paper>
        </Box>
    )
}

export default Analytics;