import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [GodsWord, setGodsWord] = React.useState('');
  const [usersGuess, setUsersGuess] = React.useState('');
  const [result, setResult] = React.useState({
    "partCorrect": "",
    "missing": "",
    "extra": ""
  });
  const successColor = "#66bb6a"; // rgb(102, 187, 106)
  const errorColor = "#f44336"; // rgb(244, 67, 54)
  const GodsWordTextarea = <TextField
    id="GodsWord"
    label="God's Word"
    placeholder="God's Word"
    value={GodsWord}
    multiline
    rows={4}
  />;
  const usersGuessTextarea = <TextField
    id="UsersGuess"
    label="Your guess"
    placeholder="Your guess"
    value={usersGuess}
    multiline
    rows={4}
  />;
  const extraElement = <span>Extra: <span style={{ color: errorColor }}>{result.extra}</span> </span>;
  const resultElement = <div style={{ textAlign: 'left' }}>
    <p><span style={{ color: successColor }}>{result.partCorrect}</span>
      <span style={{ color: errorColor }}>{result.missing}</span></p>
    <p>{result.extra.length && extraElement}</p>
  </div>;
  const steps = [
    {
      label: 'Enter the Word of God',
      content: GodsWordTextarea,
    },
    {
      label: 'Guess what the Word of God says ',
      content: usersGuessTextarea,
    },
    {
      label: 'Result',
      content: resultElement,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const evaluateGuess = (GodsWord, usersGuess) => {
    let newResult = {
      "partCorrect": "",
      "missing": "",
      "extra": ""
    };
    if (GodsWord === usersGuess) {
      newResult.partCorrect = GodsWord;
      setResult(newResult);
      return;
    }
    let i = 0;
    for (; i < GodsWord.length; i++) {
      if (i >= usersGuess.length || GodsWord[i] !== usersGuess[i]) {
        break;
      }
    }
    newResult = {
      "partCorrect": GodsWord.slice(0, i),
      "missing": i >= GodsWord.length ? "" : GodsWord.slice(i),
      "extra": i >= usersGuess.length ? "" : usersGuess.slice(i)
    };
    setResult(newResult);
  };

  const handleInputChange = (e) => {
    if (e.target.id === "GodsWord") {
      setGodsWord(e.target.value);
      evaluateGuess(e.target.value, usersGuess);
    } else if (e.target.id === "UsersGuess") {
      setUsersGuess(e.target.value);
      evaluateGuess(GodsWord, e.target.value);
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <span onChange={e => handleInputChange(e)}>{step.content}</span>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Alert variant="outlined" severity="primary">
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Alert>
      )}
    </Box>
  );
}