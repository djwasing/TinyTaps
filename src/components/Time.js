import React from 'react';

class Time extends React.Component {
    render() {
      return (
        <div className={'time'}>
          <span>
            {this.props.formatTime(this.props.currentTimeMin)}:
            {this.props.formatTime(this.props.currentTimeSec)}
            {/* {this.props.formatTime(this.props.currentTimeMs, 'ms')} */}
          </span>
        </div>
      );
    }
  }
  
  export default Time;