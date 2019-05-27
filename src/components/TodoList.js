import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group">
                <h4 className="text-center">list items</h4>
                <TodoItem />
                {/* <li className="list-group-item">Vestibulum at eros</li> */}
                <button className="btn btn-danger btn-block">Clear List</button>
            </ul>
        )
    }
}
