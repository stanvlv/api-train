export default function Ip ({ip}) {

    return (
        <div>
        <h1>Your ip is: {ip.ip}</h1>
        <h2>Your isp is: {ip.isp}</h2>
        <h3>Your ip name is: {ip.as.name}</h3>
        <h4>Your location is :{ip.location.country} , {ip.location.city}</h4>
        </div>
    )
}