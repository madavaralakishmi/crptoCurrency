import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {euroValue, usdValue, currencyLogo, currencyName} = currencyDetails
  return (
    <div className="arrange-image-text">
      <div className="arrange">
        <img className="img1" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>

      <div className="arrange">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
