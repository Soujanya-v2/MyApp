import React from 'react';
import '../App.css';
import { Grid } from '@mui/material';
import Header from './Header';
import InputBox from './InputBox';


function App(){

  return (
    <Grid item container justifyContent="center"  > 
      <Grid item container justifyContent="center" alignItems="center" flex-direction="column">
      <Header />
     </Grid> 
     <InputBox />
    </Grid>
   
  );
};

export default App;
