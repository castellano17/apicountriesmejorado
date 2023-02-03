
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CountryCard from './components/CountryCard'
import Navbar from './components/Navbar'

function App() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('')
  const [nameCountry, setNameCountry] = useState('')
  const [theme, setTheme] = useState('dark')
  
 const handleChangeRegion = (e) => setRegion(e.target.value)
 
//  const countriesFilter = countries.filter(country=> country.name.common.includes(nameCountry))
const countriesFilter = countries.filter(country => country.name.common.toLowerCase().includes(nameCountry.toLowerCase()))

 const chageTheme = ()=> setTheme(theme === 'dark' ? 'light' : 'dark')
 
  useEffect(()=>{
    const URL = `https://restcountries.com/v3.1/${region ? 'region/' + region :  'all'}`
    axios.get(URL)
    .then((res) => setCountries(res.data))
    .catch((err)=>console.log(err))
    

  },[region])

  return (
    <div className="App" id={theme}>
      <Navbar chageTheme={chageTheme} theme={theme}/>
      <section>
        <div>
        <i className='bx bx-search-alt-2'></i>
        <input type="text" value={nameCountry} onChange= {(e)=> setNameCountry(e.target.value)}/>
        </div>
        <select onChange={handleChangeRegion} >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
     <section>
      {
        countriesFilter.map((country)=> <CountryCard key={country.flags.svg} country={country} /> )
      }
     </section>
    </div>
  )
}

export default App
