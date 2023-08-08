import './App.css';
import VerticalStepper from './VerticalStepper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Typography } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App App-header">
        <Typography variant="h5" component="div">
          Memorize Scripture App
        </Typography>
        <MenuBookIcon color='primary' sx={{ fontSize: 240 }} />
        <VerticalStepper />
      </div>
    </ThemeProvider>
  );
}

export default App;
