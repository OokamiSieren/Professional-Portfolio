import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./style.css"; 
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Diana Murillo
            
             <a href="https://www.linkedin.com/in/diana-murillo-21092b17a"  target="blank">
              <i className="fab fa-linkedin fa-fw" />
              </a>
              <a href="https://github.com/OokamiSieren">
            <i className="fab fa-github fa-fw" /> </a>
            <a href="mailto:d.murillo.82@gmail.com" target="blank"> <i className="fas fa-envelope fa-fw" /></a>
    
          </Typography>
          {/* <Button color="inherit">About Me</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

