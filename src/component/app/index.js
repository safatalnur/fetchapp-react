import React, { useState, useEffect } from 'react';
import BasicTextFields from '../MenuDate/index.js';
// import Menu from '../Menu/index.js';
import '../app/App.css';
// import MenuCamera from '../MenuCamera/index.js';
import ContainedButtons from '../MenuCamera/index.js';
function App() {

  // useEffect(() =>{
  const [roverData, setRoverData]= useState(null);
  const [sol, setSol] = useState('')
  // const [earth_date, setEarth_date] = useState('') 
  // const [camera, setCamera] = useState([])


  function handleFetch(){
    // const handleFetch = async() = {
      //const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=NWH7j4t1TW48KAGZChs8NMz7OrkWHIIUdfmBhFFk`)
      //const nextData = await res.json()
      //setData(nextData)
  }

  // if (error) {
  //   return (
  //     <div>
  //       Oh no something went wrong: {error.message}
  //     </div>
  //   )
  // }
    
    console.log("FETCHING");
    console.log(sol);
    // fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${earth_date}&api_key=NWH7j4t1TW48KAGZChs8NMz7OrkWHIIUdfmBhFFk`)
    // fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1300&api_key=NWH7j4t1TW48KAGZChs8NMz7OrkWHIIUdfmBhFFk')
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=NWH7j4t1TW48KAGZChs8NMz7OrkWHIIUdfmBhFFk`)

    // .then((res) => {
      .then((response)=>{
        // return res.json();
        //turn response into json object
        return response.json();
      }).then((dataInJson) => {
      // setRoverData(data)
      //Set object into roverData state
      setRoverData(dataInJson);
      
    })
  }
  console.log("roverData")
  console.log(roverData)
  return (
    <div className="container">
        <div className="Header">
            <h1>Welcome to NASA's MARS ROVER PICTURES PARTY CLUB</h1>
        </div>
        {/* <BasicTextFields />
        <ContainedButtons /> */}

        <div className="SolNumber">
              <input className="SolInput" type="text" placeholder="Please enter a number between 0000-2540" value={sol} onChange={e => setSol(e.target.value)}/>
              {/* <input type="text" value={earth_date} onChange={e => setEarth_date(e.target.value)}/> */}
              <button className="SolButton" onClick={handleFetch}>Enter</button>
        </div>

        <div className="RoverCamera">
              {/* <input className="CameraInput" type="text" placeholder="Please enter a number between 0-7" /> */}
              {/* <input className="CameraInput" type="text" placeholder="Please enter a number between" value={camera} onChange={e => setCamera(e.target.value)}/> */}

              {/* <button className="CameraButton">Enter</button> */}
              {/* <button className="CameraButton" onClick={handleFetch}>Enter</button> */}

        </div>
              {/* <div><img src={photo.img_src} width="400" height="400"/></div> */}
              <div className="GridContent">

              {
              /*when roverData is true & roverData.photos is true run the map function that gives the JSX*/
                roverData && roverData.photos.map((item, i)=>{
                return(<div key={i}><img src={item.img_src} width="100%" height="100%"/></div>)
                })
              
              }
              </div>
    </div>
  );
}

export default App;
