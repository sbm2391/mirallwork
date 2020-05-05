import React from 'react';
import homeStyles from './homeStyles';
import { Typography, Grid, Box } from '@material-ui/core';
import colors from '../utils/colors';
import {INFORMATION_FOOTER, SERVICE_FOOTER} from '../../constants'

const Footer = (props) => {
    const { totalWidth, categories } = props
    const classes = homeStyles();
    const getColumnCategory = (column, items) => {
        if(column === 1) {
            return items.slice(0, 3);
        }
        if (column === 2) {
            return items.slice(3, 6);
        }
        if (column === 3) {
            return items.slice(6, items.length);
        }
    };
    return (
        <Grid
        style={{display: 'flex', justifyContent: 'center', background: colors.whiteBlue}}
      >
            <Typography
            component="div"
            className={classes.footerContainer}
            style={{width: totalWidth + 'px'}}
            >
                <Typography
                component="div"
                >
                    <Box
                    component="p"
                    color={colors.grayMedium}
                    fontWeight="fontWeightBold"
                    fontSize={18}
                    >
                        Información
                    </Box>
                    {INFORMATION_FOOTER.map(item => (
                        <Box
                        color={colors.grayLight}
                        fontSize={14}
                        component="p"
                        key={item.id}
                        >
                            {item.name}
                        </Box>
                    ))}
                </Typography>
                <Typography
                component="div"
                >
                    <Box
                    component="p"
                    color={colors.grayMedium}
                    fontWeight="fontWeightBold"
                    fontSize={18}
                    >
                        Categrías
                    </Box>
                    <Typography
                    component="div"
                    style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '350px'}}
                    >
                        <Typography
                        component="div"
                        >
                            {getColumnCategory(1, categories).map(item => (
                            <Box
                            color={colors.grayLight}
                            fontSize={14}
                            component="p"
                            key={item.id}
                            >
                                {item.name}
                            </Box>
                            ))}
                        </Typography>
                        <Typography
                        component="div"
                        >
                            {getColumnCategory(2, categories).map(item => (
                            <Box
                            color={colors.grayLight}
                            fontSize={14}
                            component="p"
                            key={item.id}
                            >
                                {item.name}
                            </Box>
                            ))}
                        </Typography>
                        <Typography
                        component="div"
                        >
                            {getColumnCategory(3, categories).map(item => (
                            <Box
                            color={colors.grayLight}
                            fontSize={14}
                            component="p"
                            key={item.id}
                            >
                                {item.name}
                            </Box>
                            ))}
                        </Typography>
                    </Typography>
                </Typography>
                <Typography
                component="div"
                >
                    <Box
                    component="p"
                    color={colors.grayMedium}
                    fontWeight="fontWeightBold"
                    fontSize={18}
                    >
                        Servicio
                    </Box>
                    {SERVICE_FOOTER.map(item => (
                        <Box
                        color={colors.grayLight}
                        fontSize={14}
                        component="p"
                        key={item.id}
                        >
                            {item.name}
                        </Box>
                    ))}
                </Typography>
            </Typography>
      </Grid>
    )
}

export default Footer;