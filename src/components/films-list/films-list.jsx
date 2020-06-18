import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

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
    return (
      <div className="catalog__movies-list">
        {this.props.films.map((film, idx) => (
          <FilmCard
            key={`film-${idx}-${film}`}
            film={film}
            onTitleClick={this.props.onFilmTitleClick.bind(this)}
            onPosterHover={this.setActiveFilm.bind(this)}
          />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
  ),
  onFilmTitleClick: PropTypes.func.isRequired
};

export default FilmsList;
