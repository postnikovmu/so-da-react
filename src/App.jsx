import { useState } from 'react'
import { Input, Button} from 'antd';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [parameter1, setParameter1] = useState("")
  const [parameter2, setParameter2] = useState("")
  const [parameter3, setParameter3] = useState("")
  const handleChange1 = (event) =>{
    setParameter1(event.target.value);
  }
  const handleChange2 = (event) =>{
    setParameter2(event.target.value);
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
         "parameter1": parameter1,
         "parameter2": parameter2,
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
        <Input className="parameter" id="parameter1" placeholder="Input parameter1" onChange={handleChange1}/>
        <Input className="parameter" id="parameter2" placeholder="Input parameter2" onChange={handleChange2}/>
        <Input className="parameter" id="parameter3" placeholder="Input parameter3" onChange={handleChange3}/>
        <Button type="primary" onClick={handleBtnGetData}>Get data</Button>             
      </div>  
      <p>Parameter1: {parameter1}</p>
      <p>Parameter2: {parameter2}</p>
      <p>Parameter3: {parameter3}</p>
      <p>Data: {JSON.stringify(soData)}</p>      
    </>
  )
}

export default App
