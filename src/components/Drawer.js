import { NavLink } from "react-router-dom";
import { Drawer, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    }
}));

const InsuranceDrawer = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} style={{ backgroundColor: '#00264d', color: 'white' }}>
                <Typography>Insurance Bazar <AttachMoneyIcon style={{ marginTop: 20, marginBottom: -6 }} />
                </Typography>
            </div>
            <Divider />
            <List>
                <NavLink to="/" style={{color:'black', textDecoration:'none'}}>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
                <NavLink to="/analytics" style={{color:'black', textDecoration:'none'}}>
                    <ListItem button>
                        <ListItemText primary="Analytics" />
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
    )
}

export default InsuranceDrawer