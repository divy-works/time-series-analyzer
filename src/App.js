import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button, Card, ButtonGroup} from 'react-bootstrap'
import {TimeSeriesAnalyzerTutorial, TimeSeriesAnalyzer} from 'time-series-analyzer-webapp'

import './App.css';

function App(){
  const [appState, setState] = useState('launchHome')

  const header = (body)=>      
  <div style={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"50px"}}>
    <ButtonGroup style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>
      <Button variant="primary" style={{margin:"10px"}} onClick={()=>setState('launchHome')}>Home</Button>
      <Button variant="primary" style={{margin:"10px"}} onClick={()=>setState('launchDemo')}>launch demo</Button>
      <Button variant="primary" style={{margin:"10px"}} onClick={() => setState('launchApplication')}>launch application</Button>
    </ButtonGroup>
    {body}
  </div>

  const homePage = 
      <Card style={{width:window.innerWidth<800?window.innerWidth*0.9:800}}>
        <Card.Body>
          <Card.Text style={{display:"flex", flexDirection:"column"}}>
          Time Series Analyzer has been created to analyze the data collected from sensors. 
          Other than supporting plotting of data, it allows processing using various signal processing methods such as moving window average, linear transformation.
          It also supports various analysis techniques such as histogram plot, fourier transform plot, xy plot.
          Having it as a web application, allows it to be used on all computer platforms. It is an open source project.
          <a href="https://github.com/signerd-systems/time-series-analyzer-webapp" target="_blank"><img src="https://signerd-images.s3-us-west-1.amazonaws.com/time-series-analyzer/GitHub_Logo.png" width="100px" height="34px" display="inline-block"></img></a>
          </Card.Text>
        </Card.Body>
        <Card.Img src={require('./timeseriesanalyzer_01.png')} style={{marginBottom:"50px"}}/>
      </Card>

  if (appState === 'launchHome'){
    return(
      header(homePage)
    )
  }
  else if (appState === "launchDemo"){
    return(
      header(<TimeSeriesAnalyzerTutorial/>)
    )
  }
  else if (appState === 'launchApplication'){
    return (
      header(<TimeSeriesAnalyzer/>)
    )
  }
}

export default App;
