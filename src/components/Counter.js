import React from 'react';
import Time from './Time';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
      value = '0' + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  handleClick = () => {
    this.start();
    this.setState({ count: this.state.count + 1});
  }

  render() {
      return (
      <div>
        <div>
          <h1 className="title">~ Tiny Taps ~</h1>
          
        </div>
        <div>
          <h3 className="kickCount">Kick Count: {this.state.count}</h3>
          <h3 className="timer"><Time 
            ref="display"
            {...this.state}
            formatTime={this.formatTime}
          /></h3>
          <button className="kickBtn"><img src="../images/babyFeet.png" onClick={this.handleClick} alt="myImage" className="btnImage"/></button>
        </div>
        <div>
          <h3 className="desc">Tap the button to start the timer and count your baby's kicks</h3>
        </div>
      </div>
    )
  }
}

export default Counter;