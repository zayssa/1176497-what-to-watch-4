import React from "react";
import PropTypes from "prop-types";
import Videopreview from "../videopreview/videopreview.jsx";

import {IFilm} from "../../types/film";

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timeout = null;
    this.mounted = true;
  }

  delayedHover() {
    this.timeout = setTimeout(() => {
      if (this.mounted) {
        this.props.onPosterHover(this.props.film);
        this.props.setActiveState(true);
      }
    }, 1000);
  }

  clearDelayedHover() {
    this.props.setActiveState(false);
    clearTimeout(this.timeout);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
          onMouseEnter={this.delayedHover.bind(this)}
          onMouseLeave={this.clearDelayedHover.bind(this)}
          onClick={this.props.onTitleClick.bind(this)}
        >
          <Videopreview
            preview={this.props.film.preview}
            poster={this.props.film.poster}
            isActive={this.props.isActiveState}
          />
        </div>
        <h3 className="small-movie-card__title" onClick={this.props.onTitleClick.bind(this)}>
          <a className="small-movie-card__link" href={`/films/${this.props.film.id}`}>
            {this.props.film.title}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: IFilm.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterHover: PropTypes.func.isRequired,
  isActiveState: PropTypes.bool,
  setActiveState: PropTypes.func
};

export default FilmCard;
