import './App.css';
import VerticalStepper from './VerticalStepper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <MenuBookIcon color='primary' sx={{ fontSize: 240 }} />
          <VerticalStepper />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
