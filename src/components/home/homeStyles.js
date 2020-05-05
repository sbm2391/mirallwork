
import { makeStyles } from '@material-ui/core/styles';
import colors from '../utils/colors';

const homeStyles = makeStyles((theme) => ({
    blueBox: {
      background: colors.whiteBlue,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box',
      padding: '111px',
      borderRadius: '0 8px 8px 0',
    },
    circleCover: {
      position: 'absolute',
      left: '-25px',
      top: '426px',
    },
    imageGrid: {
      position: 'absolute',
      borderRadius: '8px 0 0 8px',
      right: '0px',
      top: '144px',
    },
    dotCover: {
      position: 'absolute',
      right: '473px',
      marginTop: '-75px',
    },
    searchBox: {
      display: 'flex',
      alignItems: 'center',
      background: colors.whiteBlue,
      height: '75%',
      width: '75%',
      borderRadius: '8px',
      marginLeft: '-17px',
    },
    searchBoxItems: {
        margin: '110px'
    },
    title: {
      fontSize: '44px',
      lineHeight: '64px',
      textAlign: 'left',
      width: '530px',
    },
    searchInput: {
      display: 'flex',
      alignItems: 'center',
      background: colors.white,
      height: '60px',
      padding: '0px 30px',
      borderRadius: '6px',
    },
    inputBaseLabel: {
      margin: '0px 5px',
      minWidth: '60%',
      fontSize: '14px',
   },
    triangle: {
      position: 'absolute',
      right: '40px',
      top: '110px',
    },
    card: {
      display: 'flex',
      width: '550px',
      height: '200px',
      flexDirection: 'row',
      boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      textAlign: 'left',
      margin: '15px',
    },
    imageCard: {
        width: '275px',
        height:'100%',
        borderRadius: '8px 0 0 8px',
    },
    textCard: {
        width: '235px',
        padding: '20px',
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        boxSizing: 'content-box',
        
    },
    smallTextCard: {
        fontSize: '14px',
    },
    smallGridCard: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    slider: {
      display: 'flex',
      marginBottom: '100px'
    },
    root: {
      flexGrow: 1,
    },
    SliderContentViewer: {
      position: 'relative',
      overflow: 'hidden',
      justifyContent: 'space-between',
    }, 
    SliderContent: {
      height: '100%',
      display: 'flex',
    },
    btnContainer: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      width: '100px',
    },
    header: {
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'center',
      margin: '15px',
      fontWeight: 'bold',
    },
    smallCard: {
      width: '260px',
      height: '242px',
      borderRadius: '8px',
      textAlign: 'left',
      margin: '15px',
    },
    imageSmallCard: {
      width: '260px',
      height: '200px',
      borderRadius: '8px',
    },
    containerSmallCard: {
      width: '260px',
      display: 'flex',
      justifyContent: 'center',
    },
    textSmallCard: {
      width: '183px',
      height: '83px',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      alignItems: 'center',
      marginTop: '-50px',
      background: colors.white,
      padding: '0 20px' 
    },
    shadow: {
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
    },
    imageContainer: {
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '100px',
    },
    iconGrid: {
      width: '260px',
      height: '200px',
      borderRadius: '8px',
      textAlign: 'left',
      margin: '15px',
    },
    iconCard: {
      width: '260px',
      height: '140px',
      display:'flex',
      borderRadius: '8px',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      padding: '30px 0',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    secondTitle: {
      fontWeight: 'bold',
      fontSize: '20px',
    },
    blueTitle: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: colors.blue,
    },
    aboutContainer: {
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '100px',
    },
    footerContainer: {
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      margin: '50px 0',
      textAlign: 'left',
    },
    aboutCard: {
      width: '260px',
      height: '218px',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    dotRecomendation: {
      position: 'absolute',
      width: '170px',
      right: 20,
      marginTop: '-13px',
    },
    triangleRecom: {
      position: 'absolute',
      left: '170px',
      marginTop: '200px',
    },
    
  }));
  
  export default homeStyles;