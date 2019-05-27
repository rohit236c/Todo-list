import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends React.Component{
    // initialising the states 
    state = {
        items : [],
        id : uuid(),
        item : "",
        Done : false 
    }

    
handleChange = event =>{
   this.setState(
       { item : event.target.value } )
}
handleSubmit = e =>{
   
    e.preventDefault();

    const newItem = {
        id : this.state.id,
        title : this.state.item
    }
    // console.log(newItem)
    const updatedItems = [...this.state.items,newItem]
    // console.log(updatedItems)
    this.setState({
        items : updatedItems,
        item : '',
        id : uuid(),
        Done : false
    })

};
clearList = () => {
    this.setState({
        items : []
    })
}

handleDelete = (id) =>{
    const filterItems = this.state.items.filter(item =>
    item.id!== id)
    this.setState({
        items : filterItems
    })
}



render(){
     return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h2 className="text-center text-captailize">Plain JavaScript To-Do List
                    </h2>
                    <h4 className="text-center text-captailize text-secondary">Quick and Dirty</h4>

                    <TodoInput
                    item= {this.state.item} 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    />
                    <TodoList 
                        items = {this.state.items}
                        clearList = {this.clearList}
                        handleDelete = {this.handleDelete}
                    />
                </div>
            </div>    
        </div>
        
         
     )
 }

}




export default App ;