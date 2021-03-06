import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPreview from "../video-preview/video-preview.jsx";

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
        <Link to={`/films/${this.props.film.id}`}>
          <div
            className="small-movie-card__image"
            onMouseEnter={this.delayedHover.bind(this)}
            onMouseLeave={this.clearDelayedHover.bind(this)}
          >
            <VideoPreview
              preview={this.props.film.preview}
              poster={this.props.film.poster}
              isActive={this.props.isActiveState}
            />
          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${this.props.film.id}`} className="small-movie-card__link">
            {this.props.film.title}
          </Link>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: IFilm.isRequired,
  isActiveState: PropTypes.bool,
  setActiveState: PropTypes.func
};

export default FilmCard;
