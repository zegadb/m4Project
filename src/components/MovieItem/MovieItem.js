import React, { Component } from 'react';
import './MovieItem.css';
import addToList from '../Favorites/Favorites';
import store from '../../redux/store';

class MovieItem extends Component {
    onClick = (imdbID) => {
        store.dispatch({
            type: 'ADD_TO_LIST',
            payload: {
                imdbID: imdbID
            }
        })
    }
    render() {
        const { imdbID, title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.onClick(imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;