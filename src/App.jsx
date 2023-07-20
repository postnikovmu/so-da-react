import { useState, useEffect } from 'react'
import { Input, Button, Select } from 'antd';
import './App.css'

function App() {

  useEffect(() => fetchCountryList, [])
  useEffect(() => fetchLanguageHaveWorkedWithList, [])    
  const [country, setCountry] = useState("")
  const [countriesOptions, setCountriesOptions] = useState("")
  const [languageHaveWorkedWith, setLanguageHaveWorkedWith] = useState("")
  const [languageHaveWorkedWithOptions, setLanguageHaveWorkedWithOptions] = useState("")  
  const [parameter3, setParameter3] = useState("")
  const handleCountry = (event) => {
    setCountry(event);
  }
  const handleLanguageHaveWorkedWith = (event) => {
    setLanguageHaveWorkedWith(event);
  }
  const handleChange3 = (event) => {
    setParameter3(event.target.value);
  }
  const handleBtnGetData = (event) => {
    postSelectFromDF();
  }
  const [soData, setSoData] = useState([])
  const postSelectFromDF = async () => {
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

  async function fetchCountryList() {
    const response = await fetch("http://localhost:8000/country/")
    const soRespData = await response.json()
    const countries = soRespData.countries
    setCountriesOptions( countries.map((country)=>({label: country, value: country,})) )
  }
  async function fetchLanguageHaveWorkedWithList() {
    const response = await fetch("http://localhost:8000/languagehaveworkedwith/")
    const soRespData = await response.json()
    const languages = soRespData.languagehaveworkedwith
    setLanguageHaveWorkedWithOptions( languages.map((language)=>({label: language, value: language,})) )
  }


  return (
    <>
      <div className='input-fields'>
        <Select
          defaultValue=""
          options={countriesOptions}
          style={{ width: 500}}
          placeholder="Country" 
          onChange={handleCountry}
        />
        <Select
          defaultValue=""
          options={languageHaveWorkedWithOptions}
          style={{ width: 500}}
          placeholder="LanguageHaveWorkedWith" 
          onChange={handleLanguageHaveWorkedWith}
        />

        <Input className="parameter" id="parameter3" placeholder="Input parameter3" onChange={handleChange3} />
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
