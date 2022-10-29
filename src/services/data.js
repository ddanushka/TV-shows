import axios from 'axios';

const getData = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

// get all shows
export function AllShows() {
    return getData(`https://api.tvmaze.com/shows`);
}

// get specific show
export function getShow(key) {
    return getData(`https://api.tvmaze.com/shows/${key}`);
}

// get episodes
export function getEpisodes(key) {
    return getData(`https://api.tvmaze.com/shows/${key}/episodes`);
}

// search for shows
export function getSearchResult(keyword) {
    return getData(`https://api.tvmaze.com/search/shows?q=${keyword}`);
}