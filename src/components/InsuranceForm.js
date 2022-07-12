import { Fragment, useState } from "react";
import { TextField, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import './InsuranceForm.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const InsuranceForm = (props) => {

    const { insurance, onEdit } = props
    const { Bodily_Injury_Liability, Customer_Gender, Customer_Income_Group, Customer_Marital_Status, Customer_Region, Customer_id, Date_Of_Purchase, Fuel, Personal_Injury_Protection, Policy_id, Premium, Property_Damage_Liability, VEHICLE_SEGMENT, collision, comprehensive } = insurance;

    const [premiumControl, setPremiumControl] = useState(false);
    const [values, setValues] = useState({
        bodilyInjuryLiability: Bodily_Injury_Liability,
        gender: Customer_Gender,
        incomeGroup: Customer_Income_Group,
        maritalStatus: Customer_Marital_Status,
        region: Customer_Region,
        customerId: Customer_id,
        purchaseDate: Date_Of_Purchase,
        fuel: Fuel,
        personalInjuryProtection: Personal_Injury_Protection,
        policyId: Policy_id,
        premium: Premium,
        propertyDamageLiability: Property_Damage_Liability,
        vehichleSegment: VEHICLE_SEGMENT,
        Collision: collision,
        Comprehensive: comprehensive
    })


    const { bodilyInjuryLiability, gender, incomeGroup, maritalStatus, region, customerId, purchaseDate, fuel, personalInjuryProtection, policyId, premium, propertyDamageLiability, vehichleSegment, Collision, Comprehensive } = values;


    const inputChangeHandler = (event) => {
        const value = event.target.value;
        setValues({
            ...values,
            [event.target.name]: value
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setPremiumControl(false);
    };

    const onEditHandler = (event) => {
        event.preventDefault();
        if (premium > 1000000) {
            setPremiumControl(true)
            return
        }
        onEdit(values);
    }

    return (
        <Fragment>
            <TextField
                autoFocus
                margin="normal"
                name="policyId"
                label="Policy Id"
                variant="outlined"
                value={policyId}
                disabled
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="customerId"
                label="Customer Id"
                variant="outlined"
                value={customerId}
                disabled
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="gender"
                label="Gender"
                variant="outlined"
                value={gender}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="maritalStatus"
                label="Marital Status"
                variant="outlined"
                value={maritalStatus}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="region"
                label="Customer Region"
                variant="outlined"
                value={region}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="fuel"
                label="Fuel"
                variant="outlined"
                value={fuel}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="vehichleSegment"
                label="Vehicle Segment"
                variant="outlined"
                value={vehichleSegment}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="purchaseDate"
                label="Date Of Purchase"
                variant="outlined"
                value={purchaseDate}
                disabled
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="premium"
                label="Premium"
                variant="outlined"
                value={premium}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="incomeGroup"
                label="Income Group"
                variant="outlined"
                value={incomeGroup}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="bodilyInjuryLiability"
                label="Bodily Injury Liability"
                variant="outlined"
                value={bodilyInjuryLiability}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="personalInjuryProtection"
                label="Personal Injury Protection"
                variant="outlined"
                value={personalInjuryProtection}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="propertyDamageLiability"
                label="Property Damage Liability"
                variant="outlined"
                value={propertyDamageLiability}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="Collision"
                label="Collision"
                variant="outlined"
                value={Collision}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <TextField
                autoFocus
                margin="normal"
                name="Comprehensive"
                label="Comprehensive"
                variant="outlined"
                value={Comprehensive}
                onChange={inputChangeHandler}
                className="insuranceText"
            />
            <Button id="primaryButton" variant="contained" onClick={onEditHandler}>
                Submit
            </Button>

            <Snackbar open={premiumControl} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">Premium must be less than 1M</Alert>
            </Snackbar>       
        </Fragment>
    )
}

export default InsuranceForm;