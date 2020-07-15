import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, ButtonGroup} from 'react-bootstrap'
import {TimeSeriesAnalyzer} from 'time-series-analyzer-webapp'

import './App.css';

function App(){
  const [appState, setState] = useState('launchHome')

  const header = (body)=>      
  <div style={{width:"100vw", display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"50px"}}>
    <ButtonGroup style={{display:"block", marginLeft:"auto", marginRight:"auto"}}>
      <Button variant="primary" style={{margin:"10px"}} onClick={()=>setState('launchHome')}>Home</Button>
      <Button variant="primary" style={{margin:"10px"}} onClick={()=>setState('launchDemo')}>Demo</Button>
      <Button variant="primary" style={{margin:"10px"}} onClick={() => setState('launchApplication')}>Application</Button>
    </ButtonGroup>
    {body}
  </div>

  const tutorial = () =>
    <div style={{display:"flex", flexDirection:"column", margin:"20px", maxWidth:window.innerWidth, marginBottom:"50px"}}>
      <p>
        Measurement Time Series Data is expected in JSON file format in key-value format. Key being the signal name and value being object with properties name, time, data, samplingTime, description, timeUnit and signalUnit.
      </p>
      <a href="https://signerd-images.s3-us-west-1.amazonaws.com/time-series-analyzer/generated_signals.json" download="gnerated_signals.json">Download Sample Measurement</a>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", flexWrap:"wrap", justifyContent:"space-around"}}>
        <img src="https://signerd-images.s3-us-west-1.amazonaws.com/time-series-analyzer/measurement_data_format.jpg" style={{display:"inline", width:window.innerWidth<400?window.innerWidth*0.9:"400px", margin:"10px"}}/>
        <iframe width={window.innerWidth<600?window.innerWidth*0.9:"560"} height={window.innerWidth<600?window.innerWidth*0.5625:"315"} src="https://www.youtube.com/embed/u_d9QtsDIIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{display:"inline"}}></iframe>
      </div>
    </div>

  const homePage = 
      <div style={{width:window.innerWidth<800?window.innerWidth*0.9:800, display:"flex", flexDirection:"column", border:"1px solid lightgray", borderRadius:"5px", padding:"3px"}}>
        <p>
          Time Series Analyzer has been created to analyze the data collected from sensors. 
          Other than supporting plotting of data, it allows processing using various signal processing methods such as moving window average, linear transformation.
          It also supports various analysis techniques such as histogram plot, fourier transform plot, xy plot.
          Having it as a web application, allows it to be used on all computer platforms. It is an open source project.
          <a href="https://github.com/signerd-systems/time-series-analyzer-webapp" target="_blank"><img src="https://signerd-images.s3-us-west-1.amazonaws.com/time-series-analyzer/GitHub_Logo.png" width="100px" height="34px" display="inline-block"></img></a>
        </p>
        <img src={require('./timeseriesanalyzer_01.png')} style={{marginBottom:"50px", display:"block", width:"100%", height:"auto"}}/>
      </div>

  if (appState === 'launchHome'){
    return(
      header(homePage)
    )
  }
  else if (appState === "launchDemo"){
    return(
      header(tutorial())
    )
  }
  else if (appState === 'launchApplication'){
    return (
      header(<TimeSeriesAnalyzer/>)
    )
  }
}

export default App;
