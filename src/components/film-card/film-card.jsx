import React from "react";
import PropTypes from "prop-types";
import Videopreview from "../videopreview/videopreview.jsx";

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      timeout: null
    };
  }

  delayedHover() {
    this.setState({
      timeout: setTimeout(()=>{
        this.props.onPosterHover(this.props.film);
        this.setState({
          isActive: true
        });
      }, 1000)
    });
  }

  clearDelayedHover() {
    this.setState({
      isActive: false
    });
    clearTimeout(this.state.timeout);
  }

  render() {
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" onMouseEnter={this.delayedHover.bind(this)} onMouseLeave={this.clearDelayedHover.bind(this)} onClick={this.props.onTitleClick.bind(this)}>
          {this.state.isActive ? (
            <Videopreview preview={this.props.film.preview}/>
          ) : (
            <img src={this.props.film.poster} alt={this.props.film.title} width="280" height="175" />
          )}
        </div>
        <h3 className="small-movie-card__title" onClick={this.props.onTitleClick.bind(this)}>
          <a className="small-movie-card__link" href={`/films/${this.props.film.id}`}>{this.props.film.title}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onTitleClick: PropTypes.func.isRequired,
  onPosterHover: PropTypes.func.isRequired
};

export default FilmCard;
