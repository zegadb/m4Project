import React, { Component } from 'react';
import { removeFavItem } from '../../redux/actions';
import store from '../../redux/store';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: '',
        movies: []
    }
    componentDidMount() {
        this.setState({movies: store.getState().favorites})
        store.subscribe(() => this.setState({movies: store.getState().favorites}))
    }
    onDelete = (id) => {
        store.dispatch(removeFavItem(id))
    }
    submitHandler = (e) => {
        e.preventDefault()
    }
    render() { 
        return (
            <div className="favorites">
                <form onSubmit={this.submitHandler}>
                    <input placeholder='Введите название списка' onChange={e => this.setState({ title: e.target.value })} className="favorites__name" />
                    <ul className="favorites__list">
                        {this.state.movies.map((item) => {
                            return <li className="favorites__list-item" key={item.imdbID}>{item.Title} ({item.Year}) <button onClick={() => this.onDelete(item.imdbID)}>X</button></li>;
                        })}
                    </ul>
                    <button type="button" className="favorites__save">Сохранить список</button>
                </form>
            </div>
        );
    }
}
 
export default Favorites;