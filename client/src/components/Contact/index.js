import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
export default function Contact({ children }) {
  const classes = useStyles();
  const [spacing] = React.useState(4);
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <div className="contactContainer">
          <h1 className="contact">Contact Me</h1>
          <a href="mailto:d.murillo.82@gmail.com" target="blank">
            {" "}
            <i className="fas fa-envelope fa-10x envelope" />
          </a>
        </div>
        <br />
      </Grid>
    </Grid>
  );
}
