// Write your JS code here
import './index.css'

const Header = () => (
  <nav>
    <div className="header-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="img-1-header"
      />
      <div className="card-2-header">
        <ul className="list-container-header">
          <li className="list-item-header">Home</li>
          <li className="list-item-header">Products</li>
          <li className="list-item-header">Cart</li>
        </ul>
        <button type="button" className="header-button">
          Logout
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="img-2-exit-header"
      />
    </div>
    <div className="for-sm-design">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="for-sm-img-1"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="for-sm-img-1"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="for-sm-img-1"
      />
    </div>
  </nav>
)

export default Header
