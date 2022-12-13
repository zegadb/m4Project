import React, { Component } from 'react';
import './ListPage.css';
import store, {getState} from '../../redux/store';
import { loadList } from '../../redux/actions';

class ListPage extends Component {
    state = {
        movies: ''
    }
    componentDidMount() {
        fetch('https://acb-api.algoritmika.org/api/movies/list/'+window.localStorage.getItem('link'))
        .then(res => res.json())
        .then(data => {
            let movieList = []
            data.movies.forEach(item => {
                fetch('http://www.omdbapi.com/?i='+item+'&apikey=e61cb5b3')
                .then(res => res.json())
                .then(data => {
                    const object = {
                        title: data.Title,
                        year: data.Year,
                        imdbID: data.imdbID,
                    }
                    movieList.push(object)
                })
            });
            console.log([...movieList])
        })
    }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {/* {this.state.movies.forEach((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })} */}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;


/*
                    {this.state.movies.forEach((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
*/
/*
        fetch('https://acb-api.algoritmika.org/api/movies/list/'+window.localStorage.getItem('link'))
        .then(res => res.json())
        .then(data => {
            data.movies.forEach(item => {
                fetch('http://www.omdbapi.com/?i='+item+'&apikey=e61cb5b3')
                .then(res => res.json())
                .then(data => {
                    const object = {
                        title: data.Title,
                        year: data.Year,
                        imdbID: data.imdbID,
                    }
                    this.state.movies.push(object)
                })
            });
        })
        setTimeout(() => {
            console.log(this.state.movies)
        }, 2000);
*/