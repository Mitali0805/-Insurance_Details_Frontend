import { useState, useEffect } from 'react';
import { Box, Paper, AppBar, Toolbar, Typography, FormControl, TextField, Button, Dialog, DialogContent, DialogTitle, IconButton, Snackbar } from '@material-ui/core'
import { Edit, Close } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';
import InsuranceService from '../Service/InsuranceService'
import './Dashboard.css'
import InsuranceCards from './InsuranceCards';
import InsuranceForm from './InsuranceForm';
import InsuranceDrawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Dashboard = () => {
    const classes = useStyles();

    const [openDialog, setOpenDialog] = useState(false);
    const [editSuccess, setEditSuccess] = useState(false);
    const [id, setId] = useState('');
    const [values, setValues] = useState({
        Bodily_Injury_Liability: "",
        Customer_Gender: "",
        Customer_Income_Group: "",
        Customer_Marital_Status: "",
        Customer_Region: "",
        Customer_id: "",
        Date_Of_Purchase: "",
        Fuel: "",
        Personal_Injury_Protection: "",
        Policy_id: "",
        Premium: "",
        Property_Damage_Liability: "",
        VEHICLE_SEGMENT: "",
        collision: "",
        comprehensive: ""
    })
    const [error, setError] = useState(false);


    useEffect(() => {
        const data = {
            policyId: id,
            customerId: id
        }
        InsuranceService.getInsuranceDetailsByPolicyOrCustomerId(data)
            .then((res) => {
                if (res) {
                    const { Bodily_Injury_Liability, Customer_Gender, Customer_Income_Group, Customer_Marital_Status, Customer_Region, Customer_id, Date_Of_Purchase, Fuel, Personal_Injury_Protection, Policy_id, Premium, Property_Damage_Liability, VEHICLE_SEGMENT, collision, comprehensive } = res
                    setValues({
                        ...values,
                        Bodily_Injury_Liability: Bodily_Injury_Liability,
                        Customer_Gender: Customer_Gender,
                        Customer_Income_Group: Customer_Income_Group,
                        Customer_Marital_Status: Customer_Marital_Status,
                        Customer_Region: Customer_Region,
                        Customer_id: Customer_id,
                        Date_Of_Purchase: Date_Of_Purchase,
                        Fuel: Fuel,
                        Personal_Injury_Protection: Personal_Injury_Protection,
                        Policy_id: Policy_id,
                        Premium: Premium,
                        Property_Damage_Liability: Property_Damage_Liability,
                        VEHICLE_SEGMENT: VEHICLE_SEGMENT,
                        collision: collision,
                        comprehensive: comprehensive
                    })
                } else {
                    setValues({
                        Bodily_Injury_Liability: '',
                        Customer_Gender: '',
                        Customer_Income_Group: '',
                        Customer_Marital_Status: '',
                        Customer_Region: '',
                        Customer_id: '',
                        Date_Of_Purchase: '',
                        Fuel: '',
                        Personal_Injury_Protection: '',
                        Policy_id: '',
                        Premium: '',
                        Property_Damage_Liability: '',
                        VEHICLE_SEGMENT: '',
                        collision: '',
                        comprehensive: ''
                    })
                }
            })
            .catch(err => console.log(err))
    }, [editSuccess])

    const { Bodily_Injury_Liability, Customer_Gender, Customer_Income_Group, Customer_Marital_Status, Customer_Region, Customer_id, Date_Of_Purchase, Fuel, Personal_Injury_Protection, Policy_id, Premium, Property_Damage_Liability, VEHICLE_SEGMENT, collision, comprehensive } = values;

    const searchHandler = (event) => {
        event.preventDefault();

        setId(event.target.value);

        // To Detect if user has pressed Enter
        if (event.code === 'Enter') {
            const data = {
                policyId: id,
                customerId: id
            }
            InsuranceService.getInsuranceDetailsByPolicyOrCustomerId(data)
                .then((res) => {
                    if (res) {
                        const { Bodily_Injury_Liability, Customer_Gender, Customer_Income_Group, Customer_Marital_Status, Customer_Region, Customer_id, Date_Of_Purchase, Fuel, Personal_Injury_Protection, Policy_id, Premium, Property_Damage_Liability, VEHICLE_SEGMENT, collision, comprehensive } = res
                        setValues({
                            ...values,
                            Bodily_Injury_Liability: Bodily_Injury_Liability,
                            Customer_Gender: Customer_Gender,
                            Customer_Income_Group: Customer_Income_Group,
                            Customer_Marital_Status: Customer_Marital_Status,
                            Customer_Region: Customer_Region,
                            Customer_id: Customer_id,
                            Date_Of_Purchase: Date_Of_Purchase,
                            Fuel: Fuel,
                            Personal_Injury_Protection: Personal_Injury_Protection,
                            Policy_id: Policy_id,
                            Premium: Premium,
                            Property_Damage_Liability: Property_Damage_Liability,
                            VEHICLE_SEGMENT: VEHICLE_SEGMENT,
                            collision: collision,
                            comprehensive: comprehensive
                        })
                    } else {
                        setValues({
                            Bodily_Injury_Liability: '',
                            Customer_Gender: '',
                            Customer_Income_Group: '',
                            Customer_Marital_Status: '',
                            Customer_Region: '',
                            Customer_id: '',
                            Date_Of_Purchase: '',
                            Fuel: '',
                            Personal_Injury_Protection: '',
                            Policy_id: '',
                            Premium: '',
                            Property_Damage_Liability: '',
                            VEHICLE_SEGMENT: '',
                            collision: '',
                            comprehensive: ''
                        })
                        setError(true);
                    }
                })
                .catch(err => {
                    if(err){
                        setError(true);
                    }
                })
        }
    }

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setError(false);
    };

    const editHandler = (data) => {
        const { bodilyInjuryLiability, gender, incomeGroup, maritalStatus, region, purchaseDate, fuel, personalInjuryProtection, policyId, premium, propertyDamageLiability, vehichleSegment, Collision, Comprehensive } = data;
        const details = {
            bodilyInjuryLiability, gender, incomeGroup, maritalStatus, region, purchaseDate, fuel, personalInjuryProtection, policyId, premium, propertyDamageLiability, vehichleSegment, Collision, Comprehensive
        }
        InsuranceService.updateInsuranceDetailsByPolicyId(details)
            .then((res) => {
                console.log(res)
                setOpenDialog(false);
                setEditSuccess(true);
            })
            .catch(err => {
                setOpenDialog(true);
                setEditSuccess(false)
            })
        setEditSuccess(false);
    }

    return (
        <Box className='box'>
            <Paper elevation={0}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <FormControl fullWidth autoComplete="off">
                                <TextField
                                    placeholder="Search with Policy ID or Customer ID...."
                                    type="search"
                                    style={{ marginLeft: 300 }}
                                    name='id'
                                    onKeyUp={searchHandler}
                                />
                            </FormControl>
                        </Typography>
                    </Toolbar>
                </AppBar>
                {Customer_id && <Button className='editButton' id="editButton" onClick={handleClickOpenDialog}>Edit<Edit fontSize='medium' /></Button>}
                <InsuranceCards insurance={values} />
            </Paper>
            <InsuranceDrawer/>
            <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Edit Insurance Details
                    <IconButton onClick={handleClose} style={{ float: 'right' }}><Close /></IconButton>
                </DialogTitle>
                <DialogContent>
                    <InsuranceForm insurance={values} onEdit={editHandler} />
                </DialogContent>
            </Dialog>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">Please Enter Valid Policy Id or Customer Id.</Alert>
            </Snackbar>   
        </Box>
    )
}

export default Dashboard;