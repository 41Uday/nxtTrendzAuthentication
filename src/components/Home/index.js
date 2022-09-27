// Write your JS code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />
        <div className="card-1-home">
          <div className="card-1-inner-home">
            <h1 className="head-home">Clothes That Get YOU Noticed</h1>
            <div className="img-center-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="home-img-3"
              />
            </div>

            <p className="head-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time.Clothes have always been a marker of the
              era and we are in a revolution.Your fashion makes you been seen
              and heard that way you are.So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="shop-home-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-img-2"
          />
        </div>
      </div>
    )
  }
}

export default Home
