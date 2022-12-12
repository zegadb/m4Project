import { Component } from "react";
import store from "./redux/store";

export default class TestFunction extends Component {

    onClick = () => {
        store.dispatch({
            type: 'ADD_ITEM',
            value: 5
        })
    }
    componentDidMount() {
        store.subscribe(() => console.log(store.getState()))
    }
    render () {
        return <button onClick={this.onClick}>+</button>
    }
}