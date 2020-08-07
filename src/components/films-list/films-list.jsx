import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import ShowMore from "../show-more/show-more.jsx";
import withActiveState from "../hocs/with-active-state/with-active-state.jsx";

import {IFilm} from "../../types/film";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.FILMS_PER_PAGE = 8;
  }

  pageIncrease() {
    this.props.setPage(this.props.page + 1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.genre !== this.props.genre) {
      this.props.setPage(1);
    }
  }

  render() {
    const FilmCardWrapped = withActiveState(FilmCard);

    const filmsList = this.props.genre ? this.props.films.filter((film) => (
      !this.props.genre || film.genre === this.props.genre
    )) : this.props.films;

    return (
      <>
        <div className="catalog__movies-list">
          {filmsList.map((film) => (
            <FilmCardWrapped
              key={`film-${film.id}-${film.title}`}
              film={film}
              onPosterHover={this.props.setActiveItem ? this.props.setActiveItem.bind(this) : () => {}}
            />
          )).slice(0, this.props.onMainPage ? this.FILMS_PER_PAGE * this.props.page : 4)}
        </div>

        {this.props.onMainPage && filmsList.length > this.props.page * this.FILMS_PER_PAGE ? (
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
  onMainPage: PropTypes.bool,
  page: PropTypes.number,
  setPage: PropTypes.func,
  activeItem: IFilm || null,
  setActiveItem: PropTypes.func
};

export default FilmsList;
