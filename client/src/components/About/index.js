import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Profile from "../../images/IMG_3021.PNG";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345,
    margin: 15
  },
  paper: {
    height: 500,
    padding:10
  }
}));

export default function About({ children }) {
  const classes = useStyles();
  const [spacing] = React.useState(4);
  return (
    <Grid container className={classes.root} spacing={2} id="background">
      <Grid item xs={12}>
        <div className="aboutContainer">
          <h1 className="about">About Me</h1>
        </div>
        <br />
      </Grid>

      <Grid item xs={6} sm={4}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="profile"
            height="500"
            image={Profile}
            title="Profile Picture"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}>
      <Card className={classes.card}>
        <Paper className={classes.paper}>
          <h2 id="title">Diana Murillo</h2>
          <br />
          <p className="aboutMe">
            I am an enthusiastic, problem solving, full stack web developer with
            a passion for learning and building functioning applications. I have
            a positive attitude and encourage all who work with me in order to
            do our best while providing excellence in all that we do. I am a
            committed, hard working professional that would be an asset to any
            team.{" "}
          </p>
          <br />
          <br/>
          <p className="aboutMe">
            <a href="https://docs.google.com/document/d/1vqPakI4N-_A1WxUGlNlUuFc8QDZ9fmNuJJA2lx_cEvU/edit?usp=sharing">
              <i className="fas fa-file-alt fa-3x" id="icon" />{" "}
            </a>
            Resume
          </p>
          </Paper>
          </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
          <Card className={classes.card}>
          <Paper className={classes.paper}>
          <h2 className="skills">Skills:</h2>
          <br/>
          <br/>
          <i className="fab fa-html5 fa-3x" id="icon"></i>
          <i className="fab fa-css3-alt fa-3x" id="icon"></i>
          <i className="fab fa-js fa-3x" id="icon"></i>
          <i className="fab fa-git-square fa-3x" id="icon"></i>
          <i className="fab fa-node fa-3x" id="icon"></i>
          <i className="devicon-express-original" id="icon2"></i>
          <i className="devicon-mysql-plain" id="icon2"></i>
          <i className="devicon-mongodb-plain" id="icon2"></i>
          <i className="fab fa-npm fa-3x" id="icon"></i>
          <i className="devicon-react-original" id="icon2"></i>
          <i className="devicon-d3js-plain" id="icon2"></i>
          <i className="fab fa-bootstrap fa-3x" id="icon"></i>
          <br/>
          <br/>
          <ul>
            <li>Material UI</li>
          </ul>
        </Paper>
        </Card>
      </Grid>
    </Grid>
  );
}
