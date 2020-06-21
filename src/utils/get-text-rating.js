const TEXT_RATING = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very Good`,
  `Awesome`
];

export const getTextRating = (rating) => {
  if (rating === 10) {
    return TEXT_RATING[4];
  }
  if (rating >= 8) {
    return TEXT_RATING[3];
  }
  if (rating >= 5) {
    return TEXT_RATING[2];
  }
  if (rating >= 3) {
    return TEXT_RATING[1];
  }
  return TEXT_RATING[0];
};
