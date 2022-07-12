import axios from 'axios';

const getInsuranceDetailsByPolicyOrCustomerId = async (id) => {
    const options = {
        method: 'get',
        url: `${process.env.REACT_APP_INSURANCE_URL}/api/find`,
        headers: {
            "Content-Type": "application/json",
        },
        params: id

    }
    return await axios(options)
        .then((response) => {
            if (response.data) {
                return response.data?.[0];
            }
        })
        .catch(err => {
            throw err;
        })
}

const updateInsuranceDetailsByPolicyId = async (data) => {
    const options = {
        method: 'put',
        url: `${process.env.REACT_APP_INSURANCE_URL}/api/insurance-details`,
        headers: {
            "Content-Type": "application/json",
        },
        data

    }
    return await axios(options)
        .then((response) => {
            if (response.data) {
                return response.data?.[0];
            }
        })
        .catch(err => {
            console.log('err', err);
        })
}

const getAnalyticalData = async () => {
    const options = {
        method: 'get',
        url: `${process.env.REACT_APP_INSURANCE_URL}/api/policy-count`,
        headers: {
            "Content-Type": "application/json",
        },
    }
    return await axios(options)
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch(err => {
            console.log('err', err);
        })
}



export default {
    getInsuranceDetailsByPolicyOrCustomerId,
    updateInsuranceDetailsByPolicyId,
    getAnalyticalData,
}