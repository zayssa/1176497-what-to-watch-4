import PropTypes from "prop-types";

export const IFilm = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  preview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired
});
