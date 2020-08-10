import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {IUser} from "../../types/user";
import {IFilm} from "../../types/film";

class AddComment extends PureComponent {
  constructor(props) {
    super(props);

    this.DEFAULT_RATING = 5;
    this.REVIEW_MIN_LIMIT = 50;
    this.REVIEW_MAX_LIMIT = 400;

    this.ratingRef = createRef();
    this.commentTextRef = createRef();

    this.film = this.props.films.find((item) => item.id.toString() === this.props.match.params.filmId);
  }

  onRatingChange(evt) {
    if (evt.target.checked) {
      this.ratingRef.current = evt.target.value;
    }
    this.props.setActiveState(this.commentTextRef.current.value.length >= this.REVIEW_MIN_LIMIT && this.commentTextRef.current.value.length <= this.REVIEW_MAX_LIMIT);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.setActiveItem(``);

    this.props.api.post(`/comments/${this.film.id}`, {
      "rating": this.ratingRef.current || this.DEFAULT_RATING,
      "comment": this.commentTextRef.current.value
    }).then(() => {
      this.props.history.push(`/films/${this.film.id}`);
    }).catch((err) => {
      this.props.setActiveItem(err.toString());
    });
  }

  render() {
    return (
      <>
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol><symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol><symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol><symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol></svg>
        </div>

        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={this.film.poster} alt={this.film.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/films/${this.film.id}`} className="breadcrumbs__link">{this.film.title}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <div className="user-block">
                <div className="user-block__avatar">
                  <Link to="/mylist">
                    <img src={`https://4.react.pages.academy${this.props.userInfo.avatar_url}`} alt="User avatar" width="63" height="63" />
                  </Link>
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={this.film.poster} alt={this.film.title} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit={this.handleSubmit.bind(this)}>
              {this.props.activeItem ? (
                <div className="sign-in__message" style={{color: `red`}}>
                  <p>{this.props.activeItem}</p>
                </div>
              ) : null}
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.onRatingChange.bind(this)} />
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.onRatingChange.bind(this)} />
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this.onRatingChange.bind(this)} />
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.onRatingChange.bind(this)} />
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5" defaultChecked onChange={this.onRatingChange.bind(this)} />
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" ref={this.commentTextRef} onChange={() => {
                  this.props.setActiveState(this.commentTextRef.current.value.length >= this.REVIEW_MIN_LIMIT && this.commentTextRef.current.value.length <= this.REVIEW_MAX_LIMIT);
                }} />
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit" style={!this.props.isActiveState ? {
                    cursor: `default`,
                    opacity: 0.5
                  } : undefined} disabled={!this.props.isActiveState}>Post</button>
                </div>

              </div>
            </form>
          </div>

        </section>
      </>
    );
  }
}

AddComment.propTypes = {
  films: PropTypes.arrayOf(
      IFilm
  ).isRequired,
  match: PropTypes.any.isRequired,
  userInfo: IUser,
  api: PropTypes.any.isRequired,
  history: PropTypes.any,
  isActiveState: PropTypes.bool,
  setActiveState: PropTypes.func,
  activeItem: PropTypes.any,
  setActiveItem: PropTypes.func
};

export default AddComment;
