import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import Ip from './Ip'
import Loading from './Loading'
import Map from './Map'

function App() {

  const [ip, setIp] = useState([])
  // const [lat, setLat] = useState('')
  // const [lng, setLng] = useState('')
  const [country, setCountry] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [button, setButton] = useState(false)

  useEffect(() => {
       axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_NOTSOSECRET_API}`)
      .then(response => {
        setIp(response.data)
       // setLat(response.data.location.lat)
       // setLng(response.data.location.lng)
        setCountry(response.data.location.country.toLowerCase())
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        })
        setIsLoading(true)
      })
      .catch(error => console.log(error))
  }, [])

  const showMap = () => {
    setButton(true)
  }
 
  //  console.log(ip)
  const countryFlag = `https://flagcdn.com/${country}.svg`
  
  return (
    <div className="App">
      <div>
     {isLoading ?  <Ip ip={ip}  /> : <Loading />}
     </div>
     <img className='flag' src={countryFlag} alt="country flag"  />
     <button onClick={showMap}>I see you</button>
     <br></br>
     {button ?  <Map ip={ip} latitude={latitude} longitude={longitude} /> : 'I know where you are'}
    </div>
  );
}

export default App;
