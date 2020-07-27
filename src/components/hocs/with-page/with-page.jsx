import React, {PureComponent} from 'react';

const withPage = (Component) => {
  class WithPage extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        page: 1,
      };
    }

    render() {
      return (<Component
        {...this.props}
        page={this.state.page}
        setPage={(data) => {
          this.setState({page: data});
        }}
      />);
    }
  }

  return WithPage;
};

export default withPage;
