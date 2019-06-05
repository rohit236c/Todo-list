import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    render() {
        const {items , clearList, handleDelete , toggleDone} = this.props
        return (
            <ul className="list-group">
                <h4 className="text-center">List Items</h4>
            {
                items.map(item => {
                    return <TodoItem 
                    key = {item.id}  
                    title = {item.title} 
                    //so that it is called later
                    handleDelete = { ()=> handleDelete(item.id) }
                    toggleDone = { (ev) =>{toggleDone(ev,item.id)} }
                    
                    />
                    
                })
            }            
                
                <button className="btn btn-danger btn-block"  onClick = {clearList}>Clear List</button>
            </ul>
        )
    }
}
