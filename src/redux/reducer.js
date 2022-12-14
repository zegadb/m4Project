const SEARCH_MOVIE = 'SEARCH_MOVIE'
const SAVE_LIST = 'SAVE_LIST'
const LOAD_LIST = 'LOAD_LIST'
const ADD_TO_LIST = 'ADD_TO_LIST'
const REMOVE_FAV_ITEM = 'REMOVE_FAV_ITEM'
const LOAD_LIST_REQUEST = 'LOAD_LIST_REQUEST'
const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS'
const LOAD_LIST_FAILURE = 'LOAD_LIST_FAILURE'

const initialState = {
    favorites: [],
    movies: [],
    link: '',
    loading: null,
    movieList: [],
    error: ''
}
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOAD_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                movieList: action.payload,
                error: ''
            }
        case LOAD_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                movieList: '',
                error: action.payload
            }
    }
    if (action.type === SEARCH_MOVIE) {
        const movies = action.movies
        return {...state, movies}
    }
    if (action.type === ADD_TO_LIST) {
        let check = false
        state.favorites.forEach(item => {
            if (action.payload.imdbID === item.imdbID)
                check = true
        })
        if (!check) {
            const favItem = state.movies.find(item => 
                item.imdbID === action.payload.imdbID);
            const item = {
                imdbID: favItem.imdbID,
                Title: favItem.Title,
                Year: favItem.Year
            }
            const favorites = [...state.favorites, item];
            return {...state, favorites}
        }
    }
    if (action.type === REMOVE_FAV_ITEM) {
        const filtered = state.favorites.filter(item => action.payload.id !== item.imdbID)
        const favorites = filtered
        return {...state, favorites}
    }
    if (action.type === SAVE_LIST) {
        window.localStorage.setItem('link', action.link)
        const link = action.link
        return {...state, link}
    }
    return state
}

/*
        {
            imdbID: 'tt3896198',
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

        },
        {
            imdbID: 'tt0068646',
            title: "The Godfather",
            year: 1972,
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

        }
*/