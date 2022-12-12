import React, { Component } from 'react';
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
        store.dispatch({
            type: 'REMOVE_FAV_ITEM',
            payload: {
                id: id
            }
        })
    }
    render() { 
        return (
            <div className="favorites">
                <input placeholder='Введите название списка' onChange={e => this.setState({ title: e.target.value })} className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li key={item.imdbID}>{item.title} ({item.year}) <button onClick={() => this.onDelete(item.imdbID)}>x</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;