import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import homeStyles from './homeStyles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MediumCard from './mediumCard';
import SmallCard from './smallCard';
import { 
    CARD_WIDTH,
    RIGTH_TYPE,
    LEFT_TYPE,
    SMALL_CARD_WIDTH,
    SLIDER_TRANS,
  } from '../../constants'

const Slider = (props) => {
  const {
    items,
    totalWidth,
    multiplier,
    widthSize,
    cardType,
  } = props;
  const cardWidth = cardType === 'small' ? SMALL_CARD_WIDTH : CARD_WIDTH; 
  const classes = homeStyles();
  const [count, setCount] = useState(0);
  const [ effect,  setEffect] = useState({
    activeIndex: 0,
    translate: 0,
    transition: SLIDER_TRANS,
    type: RIGTH_TYPE,
    displayNext: true,
    displayPrev: false,
  });
  const prevSlide = () => {
    const { activeIndex } = effect;
    let counter = count;
    setCount(counter -= 1);
    if (effect.activeIndex === 0) {
      return setEffect({
        ...effect,
        activeIndex: activeIndex,
        type: RIGTH_TYPE
      })
    }
    setEffect({
      ...effect,
      activeIndex: activeIndex + multiplier,
      translate: (activeIndex + multiplier) * cardWidth,
      type: RIGTH_TYPE,
      displayNext: !(((items.length/multiplier) - 1) === counter),
      displayPrev: !(counter === 0),
    })
  }
  const nextSlide = () => {
    const { activeIndex } = effect;
    if (effect.activeIndex === - (items.length - multiplier)) {
      return setEffect({
        ...effect,
        activeIndex: activeIndex,
        type: LEFT_TYPE
      })
    }
    let counter = count;
    setCount(counter += 1);
    setEffect({
      ...effect,
      activeIndex: activeIndex - multiplier,
      translate: ((activeIndex - multiplier) * - (cardWidth)),
      type: LEFT_TYPE,
      displayNext: !(((items.length/multiplier) - 1) === counter),
      displayPrev: !(counter === 0),
    })
  }
  const getWidth = (totalItems) => {
    return widthSize * totalItems;
  };
  return (
    <Typography
    component="div"
    className={classes.slider}
    id={cardType}
    style={{width: totalWidth + 'px'}}
    >
      <Typography
      className={classes.btnContainer}
      onClick={prevSlide}
      size="small"
      >
      {effect.displayPrev && (
        <ArrowBackIosIcon fontSize="inherit" />
      )}   
      </Typography>
      <Typography component="div" className={classes.SliderContentViewer}>
        <Typography
            component="div"
            className={classes.SliderContent}
            style={{
            width: getWidth(items.length),
            }}
        >
          {cardType === 'medium' && (
            <MediumCard
            items={items}
            effect={effect}
            />
          )}
          {cardType === 'small' && (
            <SmallCard
            items={items}
            effect={effect}
            />
          )}
        </Typography>
      </Typography>
      <Typography
      className={classes.btnContainer}
      onClick={nextSlide}
      size="small"
      >
      {effect.displayNext && (
        <ArrowForwardIosIcon fontSize="inherit" />
      )} 
      </Typography>
    </Typography>
)}

export default Slider;