import React, {PureComponent} from "react";

const withVideoplayer = (Component) => {
  class WithVideoplayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        fullscreen: false,
        estimatedTime: 0
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
      />);
    }
  }

  return WithVideoplayer;
};

export default withVideoplayer;
