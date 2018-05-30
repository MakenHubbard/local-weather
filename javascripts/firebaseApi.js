const saveMovieToWishList = (newMovie) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: `POST`,
      url: `get this from config + /movies.json`,
      data: JSON.stringify(newMovie),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  saveMovieToWishList,
};
