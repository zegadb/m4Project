export function addToList(imdbID) {
    return {
        type: 'ADD_TO_LIST',
        payload: {
            imdbID: imdbID
        }
    }
}
export function removeFavItem(imdbID) {
    return {
        type: 'REMOVE_FAV_ITEM',
        payload: {
            id: imdbID
        }
    }
}
export function fetchMovies(url) {
    return function(dispatch) {
        fetch(url)
        .then(response => response.json())
        .then(json => dispatch(
            {
                type: 'SEARCH_MOVIE',
                movies: json.Search
            }
        ))
    }
}