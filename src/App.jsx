
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CountryCard from './components/CountryCard'
import CountryFilter from './components/CountryFilter'
import Navbar from './components/Navbar'

function App() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('')
  const [nameCountry, setNameCountry] = useState('')
  const [theme, setTheme] = useState('dark')

  const handleChangeRegion = (e) => setRegion(e.target.value)

  //  const countriesFilter = countries.filter(country=> country.name.common.includes(nameCountry))
  const countriesFilter = countries.filter(country => country.name.common.toLowerCase().includes(nameCountry.toLowerCase()))

  const chageTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/${region ? 'region/' + region : 'all'}`
    axios.get(URL)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err))


  }, [region])

  return (
    <div className="App" id={theme}>
      <Navbar chageTheme={chageTheme} theme={theme} />
      <CountryFilter handleChangeRegion={handleChangeRegion} nameCountry={nameCountry} setNameCountry={setNameCountry} />
      <section className='App__container'>
        {
          countriesFilter.map((country) => <CountryCard key={country.flags.svg} country={country} />)
        }
      </section>
    </div>
  )
}

export default App
