const getBannerUrl = (url) => {
  //https://image.tmdb.org/t/p/w185/xbGz8GKZNv824UgsL4cpKV0WMuV.jpg
  return `https://image.tmdb.org/t/p/w533_and_h300_face/${
    url.split("/")[url.split("/").length - 1]
  }`;
};

module.exports = { getBannerUrl };
