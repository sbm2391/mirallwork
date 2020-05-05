import React from 'react';
import { Typography, CardMedia, Grid} from '@material-ui/core';
import serviceSale from '../../images/serviceSale.png';
import homeStyles from './homeStyles';

const SmallCard = (props) => {
  const { items, effect } = props;
  const classes = homeStyles();
  const { translate, transition, type } = effect
  const getTransitionSmall = () => {
    let trans = `translateX(${translate}px)`;
    if (type === 'left') {
        trans = `translateX(${-translate}px)`;
    }
    return trans;
    }
  return (
    items.map(item => (
    <Grid
    display="Flex"
    key={item.id}
    className={classes.smallCard}
    style={{
        transform: getTransitionSmall(),
        transition: `transform ease-out ${transition}s`,
    }}
    >
      <CardMedia
        className={classes.imageSmallCard}
        image={serviceSale}
        title="image"
      />
      <Typography component="div" className={classes.containerSmallCard}>
        <Typography component="div" className={classes.textSmallCard}>
          {item.name}
        </Typography>
      </Typography>
    </Grid>
    ))
  )
}
export default SmallCard;