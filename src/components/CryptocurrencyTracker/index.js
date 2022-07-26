import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {currency: [], isLogged: true}

  componentDidMount() {
    this.onGetCurrency()
  }

  onGetCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)

    const UpDatedData = data.map(each => ({
      id: each.id,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
    }))
    this.setState({currency: UpDatedData, isLogged: false})
  }

  onRenderCurrencyList = () => {
    const {currency} = this.state

    return <CryptocurrenciesList currency={currency} />
  }

  render() {
    const {isLogged, currency} = this.state
    console.log(currency)
    return (
      <div className="bg-container">
        {isLogged ? (
          <div className="Loader" testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.onRenderCurrencyList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
