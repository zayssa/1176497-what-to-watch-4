import PropTypes from "prop-types";

export const IUser = PropTypes.oneOfType([PropTypes.shape({
  "id": PropTypes.number.isRequired,
  "email": PropTypes.string.isRequired,
  "name": PropTypes.string.isRequired,
  "avatar_url": PropTypes.string.isRequired
}), () => null]);
