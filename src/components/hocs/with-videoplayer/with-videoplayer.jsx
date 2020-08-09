import React, {PureComponent} from "react";

const withVideoplayer = (Component) => {
  class WithVideoplayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        fullscreen: false,
        estimatedTime: 0,
        paused: false
      };
    }

    render() {
      return (<Component
        {...this.props}
        isFullscreen={this.state.fullscreen}
        setFullscreen={(data) => {
          this.setState({fullscreen: data});
        }}
        estimatedTime={this.state.estimatedTime}
        setEstimatedTime={(data) => {
          this.setState({estimatedTime: data});
        }}
        paused={this.state.paused}
        setPaused={(data) => {
          this.setState({paused: data});
        }}
      />);
    }
  }

  return WithVideoplayer;
};

export default withVideoplayer;
