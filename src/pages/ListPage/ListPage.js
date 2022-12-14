import React, { Component } from 'react';
import './ListPage.css';
import store, {getState} from '../../redux/store';
import { loadList } from '../../redux/actions';

class ListPage extends Component {
    state = {
        loading: true,
        movieList: [],
        error: '',
        load: false,
        title: ''
    }
    componentDidMount() {
        store.dispatch(loadList())
        this.setState({title: store.getState().title})
        this.setState({movieList: store.getState().movieList})
        this.setState({loading: store.getState().loading})
        this.setState({error: store.getState().error})
        store.subscribe(() => this.setState({title: store.getState().title}))
        store.subscribe(() => this.setState({movieList: store.getState().movieList}))
        store.subscribe(() => this.setState({loading: store.getState().loading}))
        store.subscribe(() => this.setState({error: store.getState().error}))
        setTimeout(() => {
            this.setState({load: true})
        }, 3000);
    }
    render() {
        if (!this.state.load) return (
            <div className="list-page">
                <h1 className="list-page__title">Loading title...</h1>
                <ul>
                    Loading list....
                </ul>
            </div>
        )
        console.log(this.state.movieList)
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.title}</h1>
                <ul>
                    {!this.state.movieList.length && this.state.loading &&
                    <p style={{fontSize: '20px'}}>Loading, please wait...</p>}
                    {this.state.movieList.length && this.state.loading ?
                    this.state.movieList.map(() => {
                        return <li>Loading...</li>
                    })
                    :
                    null
                    }
                    {this.state.movieList.length && !this.state.loading ?
                    this.state.movieList.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })
                    :
                    null
                    }
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
/*
const fetchList = async () => {
            const res = await fetch('https://acb-api.algoritmika.org/api/movies/list/'+window.localStorage.getItem('link'))
            const data = await res.json()

            data.movies.forEach(item => {
                const fetchItems = async () => {
                    const res = await fetch('http://www.omdbapi.com/?i='+item+'&apikey=e61cb5b3')
                    const data = await res.json()
                    const object = {
                        title: data.Title,
                        year: data.Year,
                        imdbID: data.imdbID,
                    }
                    this.state.movies.push(object)
                }
                fetchItems().then().catch()
            })
        }
        fetchList().then().catch()
        console.log(this.state.movies);
        setTimeout(() => {
            console.log(this.state.movies);
    
        }, 2000);
        */