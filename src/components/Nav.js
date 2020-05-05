import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import colors from './utils/colors'
// import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  iconsButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pacifico',
  },
}));

const Nav = () => {
  const classes = useStyles();
  const width = window.innerWidth;
  const getLogo = (screenWidth) => {
    return screenWidth > 320 ? 'Mirall' : 'M'
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" collor={colors.grayWhite}
      elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.iconsButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography align='left' variant="h6" className={classes.title}>
            { getLogo(width) }
          </Typography>
          <IconButton edge="start" className={classes.iconsButton}  color='inherit' aria-label="search">
            <SearchRoundedIcon />
          </IconButton>
          <IconButton  edge="start" className={classes.iconsButton} color='inherit' aria-label="send emeail">
            <MailOutlineRoundedIcon />
          </IconButton>
          <Button variant="contained" color="secondary">
            Ingresar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;