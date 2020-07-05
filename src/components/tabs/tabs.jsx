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
  }

  render() {
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${this.state.activeTab === `overview` ? `movie-nav__item--active` : ``}`}>
              <a href="#" onClick={(evt) => {
                evt.preventDefault();
                this.setState({activeTab: `overview`});
              }} className="movie-nav__link">Overview</a>
            </li>
            <li className={`movie-nav__item ${this.state.activeTab === `details` ? `movie-nav__item--active` : ``}`}>
              <a href="#" onClick={(evt) => {
                evt.preventDefault();
                this.setState({activeTab: `details`});
              }} className="movie-nav__link">Details</a>
            </li>
            <li className={`movie-nav__item ${this.state.activeTab === `reviews` ? `movie-nav__item--active` : ``}`}>
              <a href="#" onClick={(evt) => {
                evt.preventDefault();
                this.setState({activeTab: `reviews`});
              }} className="movie-nav__link">Reviews</a>
            </li>
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
