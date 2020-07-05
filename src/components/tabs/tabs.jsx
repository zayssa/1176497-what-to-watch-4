import React from "react";
import OverviewTab from "../tabs-overview/tabs-overview.jsx";
import DetailsTab from "../tabs-details/tabs-details.jsx";
import ReviewsTab from "../tabs-reviews/tabs-reviews.jsx";

import {IFilm} from "../../types/film";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: `overview`
    };

    this.tabs = [
      {
        value: `overview`,
        label: `Overview`
      },
      {
        value: `details`,
        label: `Details`
      },
      {
        value: `review`,
        label: `Review`
      },
    ];
  }

  render() {
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {this.tabs.map((tab) => (
              <li key={`tabs-tab-${tab.value}`} className={`movie-nav__item ${this.state.activeTab === tab.value ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={(evt) => {
                  evt.preventDefault();
                  this.setState({activeTab: tab.value});
                }} className="movie-nav__link">{tab.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {this.state.activeTab === `details` ? <DetailsTab film={this.props.film} /> : null}
        {this.state.activeTab === `reviews` ? <ReviewsTab film={this.props.film} /> : null}
        {this.state.activeTab === `overview` ? <OverviewTab film={this.props.film} /> : null}
      </div>
    );
  }
}

Tabs.propTypes = {
  film: IFilm.isRequired
};

export default Tabs;
