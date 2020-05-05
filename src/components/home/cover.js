import React from 'react';
import homeStyles from './homeStyles';
import { Typography, Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import homeBackground from '../../images/homeBackground.png';
import colors from '../utils/colors';
import triangle from '../../images/triangle.svg';
import bigCircle from '../../images/bigCircle.svg';
import dotGrid from  '../../images/dotGrid.svg'


const Cover = (props) => {
    const { widthSize } = props
    const classes = homeStyles();
    const getSize = (widthSize) => {
        return parseInt(widthSize * 0.71);
    }
    return (
      <Grid
        style={{width:'100%', height: '500px', marginBottom: '110px',    textAlign: 'left'}}
      >
        <Typography
        component="div"
        className={classes.blueBox}
        style={{
            width: `${getSize(widthSize)}px`,
            height: '418px',
        }}
        >
            <Typography
            component="h1"
             className={classes.title}
             >
                Consulta y aprende de profesionales desde casa
             </Typography>
            <Typography
            component="div"
             className={classes.searchInput}
             style={{width: '437px'}}
             >
                <SearchIcon style={{fill: colors.grayLight}} />
                <InputBase
                className={classes.inputBaseLabel}
                placeholder="Busca el sevicio que necesites"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Typography>
        </Typography>
        <Typography
        component="img"
        src={bigCircle}
        className={classes.circleCover}
        />
        <Typography
        component="img"
        src={dotGrid}
        className={classes.dotCover}
        />
        <Typography
        component="img"
        src={homeBackground}
        className={classes.imageGrid}
        />
        <Typography
        component="img"
        src={triangle}
        className={classes.triangle}
        />
      </Grid>
    )

}

export default Cover;