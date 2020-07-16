import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

import {IFilm} from "../../types/film";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };
  }

  setActiveFilm(film) {
    this.setState({
      activeFilm: film
    });
  }

  render() {
    const filmsList = this.props.genre ? this.props.films.filter((film) => (
      !this.props.genre || film.genre === this.props.genre
    )).slice(0, 4) : this.props.films;

    return (
      <div className="catalog__movies-list">
        {filmsList.map((film, idx) => (
          <FilmCard
            key={`film-${idx}-${film}`}
            film={film}
            onTitleClick={this.props.onFilmTitleClick.bind(this, film)}
            onPosterHover={this.setActiveFilm.bind(this)}
          />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  genre: PropTypes.string
};

export default FilmsList;
