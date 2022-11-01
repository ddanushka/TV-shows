import axios from 'axios';

const BASE_URL = "https://api.tvmaze.com"

const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

// get all shows
export function allShows() {
  return getData(`${BASE_URL}/shows`);
}

// get specific show
export function getShow(key) {
  return getData(`${BASE_URL}/shows/${key}`);
}

// get episodes
export function getEpisodes(key) {
  return getData(`${BASE_URL}/shows/${key}/episodes`);
}

// search for shows
export function getSearchResult(keyword) {
  return getData(`${BASE_URL}/search/shows?q=${keyword}`);
}

// Order for categories
export function orderShows(data) {
  if (Array.isArray(data)) {
    const orderedList = [];
    const genreList = [];
    data.forEach(element => {
      if (element.genres?.length) {
        let genre = element.genres[1] ? element.genres[1] : element.genres[0]
        let showObj = {
          name: genre,
          shows: []
        }
        if (!genreList.includes(genre)) {
          orderedList.push(showObj)
          genreList.push(genre)
        }
      }
    });
    data.forEach(element => {
      if (element.genres) {
        let genre = element.genres[1] ? element.genres[1] : element.genres[0]
        orderedList.forEach((el) => {
          if (el.name === genre)
            el.shows.push(element)
        })
      }
    });

    return {
      showList: orderedList,
      genreList: genreList
    }
  }
  else {
    return false;
  }
}