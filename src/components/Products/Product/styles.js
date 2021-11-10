import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import IconButton from "@material-ui/core/IconButton";

const myTheme = createTheme({
  palette: {
    primary: {
      light:'#333333',
      main:'#000'
    },
    secondary: {
      main:'#1a237e'
    },
  },
});

export default makeStyles(() => ({
  root: {
    // maxWidth: 345,
    backgroundColor: '#131313',
    maxWidth: '100%',
    color: '#fff',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  MuiIconButton: {
    colorSecondary: myTheme.palette.secondary.main
  },
}));
