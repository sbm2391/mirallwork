import React from 'react';
import { Typography, Box , CardMedia, Grid} from '@material-ui/core';
import serviceSale from '../../images/serviceSale.png';
import colors from '../utils/colors';
import homeStyles from './homeStyles';

const MediumCard = (props) => {
    const { items, effect } = props;
    const classes = homeStyles();
    const { translate, transition, type } = effect
    const getTransition = () => {
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
        className={classes.card}
        style={{
          transform: getTransition(),
          transition: `transform ease-out ${transition}s`,
        }}
        >
            <CardMedia
                className={classes.imageCard}
                image={serviceSale}
                title="image"
            />
            <Typography component="div" className={classes.textCard}>
                <Box  color={colors.grayMedium} fontWeight="fontWeightBold">
                {item.name}
                </Box>
                <Box fontWeight="fontWeightBold" >
                {item.description}
                </Box>
                <Typography component="div" className={classes.smallGridCard}>
                    <Box color={colors.grayLight} className={classes.smallTextCard}>
                    {item.userFullName}
                    </Box>
                    <Box color={colors.blue} className={classes.smallTextCard}>
                    {`Quedan ${item.remainingDays} días`}
                    </Box>
                </Typography>
            </Typography>
        </Grid>
        ))
    )
}

export default MediumCard;