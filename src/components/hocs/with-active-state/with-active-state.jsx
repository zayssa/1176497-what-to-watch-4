import React, {PureComponent} from 'react';

const withActiveState = (Component) => {
  class WithActiveState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };
    }

    render() {
      return (<Component
        {...this.props}
        isActiveState={this.state.isActive}
        setActiveState={(data) => {
          this.setState({isActive: data});
        }}
      />);
    }
  }

  return WithActiveState;
};

export default withActiveState;
