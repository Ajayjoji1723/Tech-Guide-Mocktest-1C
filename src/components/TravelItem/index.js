import './index.css'

const TravelItem = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails
  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelItem
