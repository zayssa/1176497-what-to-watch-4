import React from "react";
import PropTypes from "prop-types";
import {getHumanizedDate} from "../../utils/get-humanized-date";
import {getAriaDateTime} from "../../utils/get-aria-datetime";

import {IComment} from "../../types/review";


const ReviewsTab = ({comments}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {[0, 1].map((multiply) => (
        <div className="movie-card__reviews-col" key={`comment-col-${multiply}`}>
          {comments.filter((comment, idx) => (idx % 2 === multiply)).map((comment) => (
            <div className="review" key={`comment-${comment.id}`}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={getAriaDateTime(comment.date)}>{getHumanizedDate(comment.date)}</time>
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
  comments: PropTypes.arrayOf(
      IComment
  ).isRequired
};

export default ReviewsTab;
