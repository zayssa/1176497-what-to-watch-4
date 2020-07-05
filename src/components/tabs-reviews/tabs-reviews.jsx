import React from "react";
import {IFilm} from "../../types/film";


const ReviewsTab = ({film}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {[0, 1].map((multiply) => (
        <div className="movie-card__reviews-col" key={`comment-col-${multiply}`}>
          {film.comments.filter((comment, idx) => (idx % 2 === multiply)).map((comment) => (
            <div className="review" key={`comment-${comment.author}-${comment.date}`}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.author}</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

ReviewsTab.propTypes = {
  film: IFilm.isRequired
};

export default ReviewsTab;
