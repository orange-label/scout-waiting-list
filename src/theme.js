import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #f2a900 16.66%, transparent 0 83.33%, #f2a900 0), conic-gradient(from 45deg at 66.66% 33.33%, #a57aff 135deg, rgba(165,122,255,0.75) 0% 225deg, rgba(165,122,255,0.5) 0%)',
          backgroundSize: '50px 50px',
          backgroundColor: '#f2a900',
          color: '#00182B'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,243,216)',
          boxShadow: '41px 27px 0px 5px rgb(9,0,27)',
          padding: 10,
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#09001B',
    },
    secondary: {
      main: '#F2A900',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Ubuntu, monospace',
    h2: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.5rem'
    }
  }
});

export default theme;
