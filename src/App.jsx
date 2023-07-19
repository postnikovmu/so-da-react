import { useState } from 'react'
import { Input, Button} from 'antd';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [country, setCountry] = useState("")
  const [languageHaveWorkedWith, setLanguageHaveWorkedWith] = useState("")
  const [parameter3, setParameter3] = useState("")
  const handleCountry = (event) =>{
    setCountry(event.target.value);
  }
  const handleLanguageHaveWorkedWith = (event) =>{
    setLanguageHaveWorkedWith(event.target.value);
  }
  const handleChange3 = (event) =>{
    setParameter3(event.target.value);
  }
  const handleBtnGetData = (event) =>{
    HelloFromGo();
  }
  const [soData, setSoData] = useState([])  
  const HelloFromGo = async () => {
    //const response = await fetch("http://localhost:8000/so-da")
    //const soRespData = await response.json()
    //console.log(soRespData)
    //setSoData(soRespData)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         "country": country,
         "languageHaveWorkedWith": languageHaveWorkedWith,
         "parameter3": parameter3
        })
    };
    fetch('http://localhost:8000/so-da/', requestOptions)
      .then(response => response.json())
      .then(data => setSoData(data));    
  }  
  
  return (
    <>
      <div className='input-fields'>
        <Input className="parameter" placeholder="Country" onChange={handleCountry}/>
        <Input className="parameter" placeholder="LanguageHaveWorkedWith" onChange={handleLanguageHaveWorkedWith}/>
        <Input className="parameter" id="parameter3" placeholder="Input parameter3" onChange={handleChange3}/>
        <Button type="primary" onClick={handleBtnGetData}>Get data</Button>             
      </div>  
      <p>Parameter1: {country}</p>
      <p>Parameter2: {languageHaveWorkedWith}</p>
      <p>Parameter3: {parameter3}</p>
      <p>Data: {JSON.stringify(soData)}</p>      
    </>
  )
}

export default App
