import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import VerticalStepper from './VerticalStepper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="contained">Hello World</Button>
          <VerticalStepper />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
