export function addToList(imdbID) {
    return {
        type: "ADD_TO_LIST",
        payload: {
            imdbID: imdbID,
        },
    };
}
export function removeFavItem(imdbID) {
    return {
        type: "REMOVE_FAV_ITEM",
        payload: {
            id: imdbID,
        },
    };    
}
export function fetchMovies(url) {
    return function (dispatch) {
        fetch(url)
        .then((response) => response.json())
        .then((json) =>
            dispatch({
                type: "SEARCH_MOVIE",
                movies: json.Search,
            })
        );
    };
}
export function saveList(link) {
    return {
        type: 'SAVE_LIST',
        link: link
    }
}
// export function loadList() {
//     return function (dispatch) {
//         fetch('https://acb-api.algoritmika.org/api/movies/list/'+window.localStorage.getItem('link'))
//         .then(res => res.json())
//         .then(data => {
//             let movieList = []
//             data.movies.forEach(item => {
//                 fetch('http://www.omdbapi.com/?i='+item+'&apikey=e61cb5b3')
//                 .then(res => res.json())
//                 .then(data => {
//                     const object = {
//                         title: data.Title,
//                         year: data.Year,
//                         imdbID: data.imdbID,
//                     }
//                     movieList.push(object)
//                 })
//             });
//             dispatch({
//                 type: 'LOAD_LIST',
//                 movieList: movieList
//             })
//         })
//     }
// }