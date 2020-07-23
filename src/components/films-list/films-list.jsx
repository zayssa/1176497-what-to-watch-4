import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import ShowMore from "../show-more/show-more.jsx";

import {IFilm} from "../../types/film";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.FILMS_PER_PAGE = 1;

    this.state = {
      activeFilm: null,
      page: 1
    };
  }

  setActiveFilm(film) {
    this.setState({
      activeFilm: film
    });
  }

  pageIncrease() {
    this.setState({
      page: this.state.page + 1
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genre !== this.props.genre) {
      this.setState({
        page: 1
      });
    }
  }

  render() {
    const filmsList = this.props.genre ? this.props.films.filter((film) => (
      !this.props.genre || film.genre === this.props.genre
    )) : this.props.films;

    return (
      <>
        <div className="catalog__movies-list">
          {filmsList.map((film, idx) => (
            <FilmCard
              key={`film-${idx}-${film}`}
              film={film}
              onTitleClick={this.props.onFilmTitleClick.bind(this, film)}
              onPosterHover={this.setActiveFilm.bind(this)}
            />
          )).slice(0, this.props.onMainPage ? this.FILMS_PER_PAGE * this.state.page : 4)}
        </div>

        {this.props.onMainPage && filmsList.length > this.state.page * this.FILMS_PER_PAGE ? (
          <ShowMore onClick={this.pageIncrease.bind(this)}/>
        ) : null}
      </>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  genre: PropTypes.string,
  onMainPage: PropTypes.bool
};

export default FilmsList;
