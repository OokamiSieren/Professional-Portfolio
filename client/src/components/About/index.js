import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import Profile from "../../images/IMG_3019.PNG";
 import CardMedia from '@material-ui/core/CardMedia';
 import { makeStyles } from '@material-ui/core/styles';
 import "./style.css";

 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
        maxWidth: 345,
    
        
      },
}));
    
export default function About ({children}) {
    const classes = useStyles();
    const [spacing] = React.useState(4);
    return(
        <Grid container className={classes.root} spacing={2} >
            <Grid item xs={12}>
<div className="aboutContainer">
    <h1 className="about">About Me</h1>
    </div>
    <br/>
    </Grid>

<Grid item xs={6} sm={4}>
    <Card className={classes.card} justify="right">
    <CardMedia
              component="img"
              alt="profile"
              height="400"
              image={Profile}
              title="Profile Picture"
            />
    </Card>
</Grid>
<Grid item xs={12} sm={6}>
    <Paper>
    <p className="aboutMe">This is some information about me</p>
    </Paper>
</Grid>
</Grid>
// </div>
    )
}