import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TravelItem from '../TravelItem'
import './index.css'

class TravelGuide extends Component {
  state = {travelData: [], isLoading: false}

  componentDidMount() {
    this.getTravelItemData()
  }

  getTravelItemData = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.packages.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        imageUrl: eachData.image_url,
        description: eachData.description,
      }))

      this.setState({travelData: formattedData, isLoading: false})
    }
  }

  render() {
    const {isLoading, travelData} = this.state
    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="heading">Travel Guide</h1>
        </div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="travel-list">
            {travelData.map(each => (
              <TravelItem key={each.id} travelDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default TravelGuide
