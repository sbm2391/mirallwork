import React, { useState, useEffect } from 'react';
import Cover from './cover';
import Slider from './slider';
import { sales as salesMock, recommendations as recMock, categories as categoriesMock } from '../../mock'
import { Grid, Typography } from '@material-ui/core';
import homeStyles from './homeStyles';
import Category from './category';
import About from './about';
import Footer from './footer';
import { 
  CARD_WIDTH,
  SMALL_CARD_WIDTH,
  ARROW_WIDTH,
} from '../../constants';
import dotGrid from  '../../images/dotGrid.svg';
import middleTriangle from '../../images/middleTriangle.svg';


const Home = () => {
  const widthSize = window.innerWidth;
  const classes = homeStyles();
  const [ sales,  setSales] = useState([]);
  const [ rec,  setRec] = useState([]);
  const [ totalWidth, setTotalWidth ] = useState(0);
  const [ multiplier, setMultiplier ] = useState(2);
  const [ smallMultiplier, setSmallMultiplier ] = useState(2);
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    const fetchSales = () => {
      setSales(salesMock);
    }
    const fetchRec = () => {
      setRec(recMock);
    }
    const fetchCategories = () => {
      setCategories(categoriesMock);
    }
    fetchSales();
    fetchRec();
    fetchCategories();
    getWidthCards();
  });

  const getWidthCards = () => {
    const multiplierCard = parseInt((widthSize * 0.9) / CARD_WIDTH);
    const multiplierSmallCard = parseInt((widthSize * 0.9) / SMALL_CARD_WIDTH);
    setMultiplier(multiplierCard);
    setSmallMultiplier(multiplierSmallCard);
    setTotalWidth((multiplierCard * CARD_WIDTH) + ARROW_WIDTH);
  }

  return (
    <div className={classes.root}>
      <Cover
        widthSize={widthSize}
      />
      <Typography
        component="div"
        className={classes.header}
      >
        Ofertas
      </Typography>
      <Grid
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <Slider
          items={sales}
          totalWidth={totalWidth}
          multiplier={multiplier}
          widthSize={widthSize}
          cardType='medium'
        />
      </Grid>
      <Typography
        component="img"
        src={dotGrid}
        className={classes.dotRecomendation}
        />
      <Typography
      component="div"
      className={classes.header}
      >
        Recomendaciones
      </Typography>
      <Grid
        style={{display: 'flex', justifyContent: 'center'}}
      >
         <Typography
        component="img"
        src={middleTriangle}
        className={classes.triangleRecom}
        /> 
        <Slider
          items={rec}
          totalWidth={totalWidth}
          multiplier={smallMultiplier}
          widthSize={widthSize}
          cardType='small'
        >
        </Slider>
        
      </Grid>
      
      <Typography
      component="div"
      className={classes.header}
      >
        Explora
      </Typography>
      <Grid
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <Category
        items={categories}
        totalWidth={totalWidth}
        />
      </Grid>
      <Grid
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <About
        totalWidth={totalWidth}
        />
      </Grid>
      <Footer
        totalWidth={totalWidth}
        categories={categories}
      />
    </div>
  )
}

export default Home;