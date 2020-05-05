
import React from 'react';
import homeStyles from './homeStyles';
import { Typography, Box } from '@material-ui/core';
import bigTriangle from '../../images/bigTriangle.svg';
import bigCircle from '../../images/bigCircle.svg';
import dotGrid from  '../../images/dotGrid.svg'
import colors from '../utils/colors';

const About = (props) => {
    const { totalWidth } = props
    const classes = homeStyles();
    return (
        <Typography
        component="div"
        className={classes.aboutContainer}
        style={{width: totalWidth + 'px'}}
        >
            <Typography
            className={classes.aboutCard}
            title="aboutCard"
            component="div"
            >
                <Typography component="img" src={bigCircle} />
                <Typography align="center" component="div">
                    <Typography className={classes.blueTitle} align="center" component="p">
                    Ahorra tiempo
                    </Typography>
                
                    <Box align="center" color={colors.grayLight} >
                    Consulta a profesionistas desde la comodidad de tu casa
                    </Box>
                </Typography>
            </Typography> 

                <Typography
                    className={classes.aboutCard}
                    title="aboutCard"
                    component="div"
                    >
                    <Typography component="img" src={dotGrid} />
                    <Typography align="center" component="div">
                        <Typography className={classes.blueTitle} align="center" component="p">
                        Gana dinero
                        </Typography>
                    
                        <Box align="center" color={colors.grayLight} >
                        Ofrece tus servicios, obten más clientes e incrementa tus ganancias
                        </Box>
                    </Typography>
                </Typography>
                <Typography
                className={classes.aboutCard}
                title="aboutCard"
                component="div"
                >
                    <Typography component="img" src={bigTriangle} />
                    <Typography align="center" component="div">
                        <Typography className={classes.blueTitle} align="center" component="p">
                        Asesoria y clases 1-on-1
                        </Typography>
                        <Box align="center" color={colors.grayLight} >
                        Consulta a profesionistas en sesiones privadas
                        </Box>
                    </Typography>
                </Typography> 
        </Typography> 
      )
}

export default About;