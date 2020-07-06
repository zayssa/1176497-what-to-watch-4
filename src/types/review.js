import PropTypes from "prop-types";

export const IComment = PropTypes.shape({
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  rating: PropTypes.number.isRequired,
}).isRequired;
