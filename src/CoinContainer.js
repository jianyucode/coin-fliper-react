import React, {Component} from 'react';
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coins:[
      {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  };
  
    state = {
      currCoin: null,
      nFlips: 0,
      nHead: 0,
      nTail: 0,
  }



    flipCoin = () => {

      const newCoin = (this.props.coins[Math.floor(Math.random() * this.props.coins.length)]);
      this.setState(st => {
        return {
          currCoin: newCoin,
          nFlips: st.nFlips + 1,
          nHead: st.nHead + (newCoin.side === "heads"? 1 : 0),
          nTail: st.nTail + (newCoin.side === "tails"? 1 : 0)
        }

      });
    }

    handleClick = (e) => {
      this.flipCoin();
    }

  render(){
    return(
      <div>
        { this.state.currCoin && <Coin info={this.state.currCoin} />}

        <button onClick={this.handleClick}>Click me</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHead} heads and {this.state.nTail} tails.</p>
      </div>
    )
  }

}

export default CoinContainer;
