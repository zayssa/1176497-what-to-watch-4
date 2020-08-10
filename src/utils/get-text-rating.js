const TEXT_RATINGS = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very Good`,
  `Awesome`
];

export const getTextRating = (rating) => {
  if (rating === 10) {
    return TEXT_RATINGS[4];
  }
  if (rating >= 8) {
    return TEXT_RATINGS[3];
  }
  if (rating >= 5) {
    return TEXT_RATINGS[2];
  }
  if (rating >= 3) {
    return TEXT_RATINGS[1];
  }
  return TEXT_RATINGS[0];
};
