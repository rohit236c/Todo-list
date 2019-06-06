import React, { Component } from 'react'
// import './TodoItem.css'

export default class TodoItem extends Component {
    state = {
        value : this.props.title
    }
    handleChange = (event) =>{
        this.setState(
            { value : event.target.value } )
    }

    render() {
        
        
        const{ handleDelete , toggleDone} = this.props
       
        return (
           <li  className="list-group-item text-capitalize ">
              
               <div className="todo-icon col-12">
                   <span className="text-success mr-4">
                        <input onChange = {(e)=> toggleDone(e) } type="checkbox"/>
                   </span>
                  <span className="text">
                      <input 
                      value = {this.state.value}   
                      onChange = {this.handleChange}                   
                      />
                  </span>
                   <span onClick = {handleDelete} className="text-danger ml-4 ">
                   <i className="fas fa-trash-alt"></i>
                   </span>
                   
               </div>
               
           </li>
        )
    }
}
