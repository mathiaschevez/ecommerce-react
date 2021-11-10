// import { StayPrimaryLandscape } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      light:'#181818',
      main:'#000'
    },
    secondary: {
      main:'#1a237e'
    },
  },
});

export default makeStyles((theme) => ({
  toolbar: myTheme.mixins.toolbar,
  content: {
    maxWidth: '100%',
    flexGrow: 1,
    backgroundColor: myTheme.palette.primary.light,
    padding: myTheme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
