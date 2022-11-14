import React from 'react';
import "./App.css";
import { Grid } from '@mui/material';
import Header from './Components/Header';
import InputBox from './Components/InputBox';


function App(){
  
  return (
    <>
       <Header/>
       <Grid container justifyContent="center" >
       <InputBox />
       </Grid>
     
    </>    
  )
};

export default App;
