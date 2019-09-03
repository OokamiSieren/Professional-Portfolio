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
 import Slide from 'react-reveal/Slide';
 import eventizeLogo from "../../images/EventizeLogo.PNG";
 import gitGrubImage from "../../images/Git-Grub.png";
 import clicky from "../../images/clicky.PNG";


 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    
    },
    card: {
      height: 350,
      minWidth: 200,
      padding: theme.spacing(2),
      justifyContent: "center" 
      
    }
  }));

   export default function Works () {
    const [spacing] = React.useState(8);
    const classes = useStyles();
    return(
      <Slide right top cascade>
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
              image={eventizeLogo}
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
        <Button size="small" color="primary" href="https://github.com/life-happens/life-happens">
          GitHub Repo
        </Button>
      </CardActions>
      </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.card}>
                <CardMedia 
                component="img"
              alt="Git Grub"
              height="140"
              image={gitGrubImage}
              title="Git Grub" />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Git Grub
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              An application that allows users to narrow down where they want to eat based on cusine type preferences of a group.
              </Typography>
            </CardContent>
            <CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://msovinski.github.io/Project-1-">
          View
        </Button>
        <Button size="small" color="primary" href="https://github.com/Msovinski/Project-1-">
          GitHub Repo
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
              image={clicky}
              title="Eventize" />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Clicky Game
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              A image click memory game where the user must only click an image once or the game is over.
              </Typography>
            </CardContent>
            <CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://ookamisieren.github.io/Clicky-Game">
          View
        </Button>
        <Button size="small" color="primary" href="https://github.com/OokamiSieren/Clicky-Game">
          GitHub Repo
        </Button>
      </CardActions>
      </CardActionArea>
            </Card>
            </Grid>            
        </Grid>
        </Slide>
      
    
    )
  }
  