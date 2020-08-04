export const adaptFilm = (data) => {
  return {
    id: data.id,
    title: data.name,
    poster: data.poster_image,
    genre: data.genre,
    year: data.released,
    rating: data.rating,
    count: data.scores_count,
    bg: data.background_image,
    text: data.description,
    director: data.director,
    actors: data.starring,
    preview: data.preview_video_link,
    runtime: data.run_time,

    previewImage: data.preview_image,
    bgColor: data.background_color,
    videoLink: data.video_link,
    isFavorite: data.is_favorite
  };
};

export const adaptFilmsList = (data) => {
  return data.map((film) => adaptFilm(film));
};
