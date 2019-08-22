import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
 import CardMedia from '@material-ui/core/CardMedia';
 import CardContent from "@material-ui/core/CardContent";
 import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
 import Typography from "@material-ui/core/Typography";
 import { makeStyles } from '@material-ui/core/styles';
 import "./style.css";
 import eventizeImage from "../../images/eventize.PNG";

 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    
    },
    card: {
      height: 300,
      minWidth: 200,
      padding: theme.spacing(2),
      justifyContent: "center" 
      
    }
  }));

   export default function Works () {
    const [spacing] = React.useState(8);
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing={spacing} justify="center" >
            <Grid item xs={12}>
                <div >
                    <h1 className="worksHeader">Works</h1>
                </div>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.card}>
                <CardMedia 
                component="img"
              alt="Eventize"
              height="140"
              image={eventizeImage}
              title="Eventize" />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Eventize
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              An event template customization and ticketing site for the occasional entrepreneur.
              </Typography>
            </CardContent>
            <CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://eventize-123.herokuapp.com/">
          View
        </Button>
      </CardActions>
      </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.card}>
                <CardMedia 
                component="img"
              alt="Eventize"
              height="140"
              image={eventizeImage}
              title="Eventize" />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Eventize
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              An event template customization and ticketing site for the occasional entrepreneur.
              </Typography>
            </CardContent>
            <CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
      </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.card}>
                <CardMedia 
                component="img"
              alt="Eventize"
              height="140"
              image={eventizeImage}
              title="Eventize" />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Eventize
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              An event template customization and ticketing site for the occasional entrepreneur.
              </Typography>
            </CardContent>
            <CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
      </CardActionArea>
            </Card>
            </Grid>
        </Grid>
    )
  }
  