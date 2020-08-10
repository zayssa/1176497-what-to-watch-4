import React, {PureComponent} from "react";

const withFilmsList = (Component) => {
  class WithFilmsList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        films: [],
      };
    }

    render() {
      return (<Component
        {...this.props}
        filmsList={this.state.films}
        setFilmsList={(data) => {
          this.setState({films: data});
        }}
      />);
    }
  }

  return WithFilmsList;
};

export default withFilmsList;
