import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  getData = () => (
    <div className="color-container">
      <p>CoinType</p>
      <div className="row-arrange">
        <p>USD</p>
        <p>EURO</p>
      </div>
    </div>
  )

  render() {
    const {currency} = this.props
    console.log(currency)
    return (
      <div className="bg-container1">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />
        <div className="border">
          {this.getData()}
          <ul>
            {currency.map(each => (
              <CryptocurrencyItem key={each.id} currencyDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
