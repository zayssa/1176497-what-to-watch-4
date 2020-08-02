import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        item: null,
      };
    }

    render() {
      return (<Component
        {...this.props}
        activeItem={this.state.item}
        setActiveItem={(data) => {
          this.setState({item: data});
        }}
      />);
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
