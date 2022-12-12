import React, { Component } from 'react';
import './ListPage.css';
import store from '../../redux/store';
import Favorites from '../../components/Favorites/Favorites';

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        link: ''
    }
    componentDidMount() {
        console.log('store.getState().link', store.getState().link)
        store.subscribe(() => {this.setState({link: store.getState().link})})
        fetch('https://acb-api.algoritmika.org/api/movies/list/'+store.getState().link)
        .then(response => response.json())
        .then(data => console.log(data))
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;