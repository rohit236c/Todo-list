import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const{title,handleDelete} = this.props
        return (
           <li className="list-group-item text-capitalize ">
              
               <div className="todo-icon col-12">
                   <span className="text-success mr-4">
                   <i className="fas fa-check"></i>
                   </span>
                  <span>{title}</span>
                   <span onClick = {handleDelete} className="text-danger ml-4 ">
                   <i className="fas fa-trash-alt"></i>
                   </span>
                   
               </div>
               
           </li>
        )
    }
}
