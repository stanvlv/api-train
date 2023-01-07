import { MapContainer, TileLayer} from "react-leaflet"
import { Marker, Popup } from "react-leaflet"


export default function Map ({latitude, longitude}) {
   
    let positionUp = latitude
    let positionDown = longitude
    

    return <div>
        <h4>This is your approximate location:</h4>
        <MapContainer center={[positionUp, positionDown]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[positionUp, positionDown]}>
    <Popup>
      I see you
    </Popup>
  </Marker>
</MapContainer>
        </div>
}
