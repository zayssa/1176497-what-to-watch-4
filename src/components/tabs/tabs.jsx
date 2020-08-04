import React from "react";
import PropTypes from "prop-types";
import OverviewTab from "../tabs-overview/tabs-overview.jsx";
import DetailsTab from "../tabs-details/tabs-details.jsx";
import ReviewsTab from "../tabs-reviews/tabs-reviews.jsx";

import {IFilm} from "../../types/film";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

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
        value: `reviews`,
        label: `Reviews`
      },
    ];

    this.comments = [];
  }

  componentDidMount() {
    this.props.api.get(`/comments/${this.props.film.id}`).then((response) => {
      this.comments = response.data;
    });
  }

  render() {
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {this.tabs.map((tab) => (
              <li key={`tabs-tab-${tab.value}`} className={`movie-nav__item ${this.props.activeItem === tab.value || (!this.props.activeItem && tab.value === `overview`) ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={(evt) => {
                  evt.preventDefault();
                  this.props.setActiveItem(tab.value);
                }} className="movie-nav__link">{tab.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {this.props.activeItem === `details` ? <DetailsTab film={this.props.film} /> : null}
        {this.props.activeItem === `reviews` ? <ReviewsTab comments={this.comments} /> : null}
        {this.props.activeItem === `overview` || !this.props.activeItem ? <OverviewTab film={this.props.film} /> : null}
      </div>
    );
  }
}

Tabs.propTypes = {
  film: IFilm.isRequired,
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
  api: PropTypes.any
};

export default Tabs;
