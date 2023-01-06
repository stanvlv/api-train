import { MapContainer, TileLayer, useMap } from "react-leaflet"
import { Marker, Popup } from "react-leaflet"


export default function Map ({ip, lat, lng}) {
   
        const lati = lat
        const lngi = lng
   
    return <div>
        <h4>This is your location:</h4>
        <MapContainer center={[lati, lngi]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lati, lngi]}>
    <Popup>
      I see you
    </Popup>
  </Marker>
</MapContainer>
        </div>
}