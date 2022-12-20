
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function App() {

  const classes = styles(); 
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Navbar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.littleSpace} color="primary">
          Own The Doge : Tutorials 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Learn how to set up an crypto wallet and mint a pixel of the worlds most famous meme.          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Wallet Setup" btnTitle="Much Teach" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Wallet Funding" btnTitle="Much Teach"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Buying $DOG" btnTitle="Much Teach"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Minting a Pixel" btnTitle="Much Teach"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Burning Pixel" btnTitle="Much Teach"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Governance" btnTitle="Much Teach"/>
        </div>
      <Footer/>
      </ThemeProvider>

    </div>
  );
}

export default App;
