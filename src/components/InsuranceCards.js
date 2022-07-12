import { Fragment } from "react";
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/'
import { AccountCircleSharp, WcSharp } from '@material-ui/icons';
import { FemaleTwoTone, MaleTwoTone, LocationOn, LocalGasStationSharp, CalendarMonthSharp, WorkspacePremiumSharp, MonetizationOnSharp, MedicalInformationSharp, HealingSharp, ApartmentSharp, GarageSharp } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    grid: {
        marginLeft: 400,
        maxWidth: 750,
        marginTop: 30
    },
    paper: {
        height: 120,
        padding: 10,
        textAlign: 'center'
    }
}));

const InsuranceCards = (props) => {
    const classes = useStyles();

    const { insurance } = props
    const { Bodily_Injury_Liability, Customer_Gender, Customer_Income_Group, Customer_Marital_Status, Customer_Region, Customer_id, Date_Of_Purchase, Fuel, Personal_Injury_Protection, Policy_id, Premium, Property_Damage_Liability, VEHICLE_SEGMENT, collision, comprehensive } = insurance;
    return (
        <Fragment>
            <Grid container spacing={3} className={classes.grid} style={{ marginTop: 90 }}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><AccountCircleSharp fontSize="large" /></div>
                        Customer Id: {Customer_id} <br/>
                        Policy Id: {Policy_id}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><FemaleTwoTone fontSize="large" /><MaleTwoTone fontSize="large" /></div>
                        Gender: {Customer_Gender}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><WcSharp fontSize="large" /></div>
                        Marital Status: {Customer_Marital_Status}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><LocationOn fontSize="large" /></div>
                        Customer_Region: {Customer_Region}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><LocalGasStationSharp fontSize="large" /></div>
                        Fuel: {Fuel} <br/>
                        Vehicle Segment: {VEHICLE_SEGMENT}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><CalendarMonthSharp fontSize="large" /></div>
                        Date of Purchase: {Date_Of_Purchase}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><WorkspacePremiumSharp fontSize="large" /></div>
                        Premium: {Premium}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><MonetizationOnSharp fontSize="large" /></div>
                        Income Group:<br/> {Customer_Income_Group}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><MedicalInformationSharp fontSize="large" /></div>
                        Bodily Injury Liability: {Bodily_Injury_Liability}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><HealingSharp fontSize="large" /></div>
                        Personal Injury Protection: {Personal_Injury_Protection}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><ApartmentSharp fontSize="large" /></div>
                        Property Damage Liability: {Property_Damage_Liability}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div><GarageSharp fontSize="large" /></div>
                        Collision:{collision}<br/>
                        Comprehensive: {comprehensive}
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default InsuranceCards;