const initialState = {
    favorites: [],
    movies: [
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
    ]
}
export default function reducer (state = initialState, action) {
    if (action.type === 'ADD_TO_LIST') {
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
                title: favItem.title,
                year: favItem.year
            }
            const favorites = [...state.favorites, item];
            console.log(favorites)
            return {...state, favorites}
        }
    }
    return state
}
