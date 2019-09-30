import React, {Component} from 'react';
import './App.css';
import CoinContainer from './CoinContainer'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Lets Flip the Coin</h1>
        <CoinContainer />
      </div>
    )
  }
}

export default App;
