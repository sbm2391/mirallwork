import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import homeStyles from './homeStyles';

const Category = (props) => {
  const {
    items,
    totalWidth,
  } = props
  const classes = homeStyles();
  return (
    <Typography
    component="div"
    className={classes.imageContainer}
    style={{width: totalWidth + 'px'}}
    >
      {items.map(item => (
        <Grid
        display="Flex"
        key={item.id}
        className={classes.iconGrid}
        >
        <Typography
          className={classes.iconCard}
          title="icon"
          component="div"
        >
            <Typography className={classes.secondTitle} align="center" component="div">
            {item.name}
            </Typography>
            <Typography component="img" src={item.url}>
            </Typography>
        </Typography> 
        </Grid>
      ))}
    </Typography> 
  )
};

export default Category;