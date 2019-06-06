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
        done : false
       
    }

    
handleChange = event =>{
   this.setState(
       { item : event.target.value } )
}

handleSubmit = e =>{
   
    e.preventDefault();
    
    const newItem = {
        id : this.state.id,
        title : this.state.item,
        done : this.state.done
    }

    let updatedItems = [...this.state.items]
    if(newItem.title!== "" && newItem.title!== " "){
     updatedItems = [...this.state.items,newItem]
    } 
    
    // console.log(updatedItems)
    this.setState({
        items : updatedItems,
        item : '',
        id : uuid(),      
        done : false 
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

toggleDone = (event,id) => {
    console.log(event.target.checked)
    console.log(id)
    const updatedItems = [...this.state.items]; //copy the array
    
    // updatedItems[id].done = true;
    console.log(updatedItems[0].done)
    // if(event.target.checked){
    // }

    // const filteredArray= updatedItems.filter(item =>
    //     item.id!==id
    // )
    // updatedItems[id].Done = event.target.checked; //event added
    // this.setState ({
    //     items : filteredArray ,
    // })
    

}
toggleItems = () => {
    // const elements = [...this.state.items] ;
    
 const elements =   this.state.items.reverse()
    // const lastElement = elements.pop()
    // elements.unshift(lastElement)
    console.log(elements,this.state.items)
    this.setState({
        items : elements
    })
}



render(){
     return (
       

        
        <div className="container  ">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h2 className="text-center text-captailize">Plain JavaScript To-Do List
                    </h2>
                    <h4 className="text-center text-captailize text-secondary">Quick and Dirty</h4>
                    <button className="btn btn-dark" variant="dark" >Theme Change</button>
                    <TodoInput
                    item = {this.state.item} 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    />
                    
                    <TodoList 
                        items = {this.state.items}
                        clearList = {this.clearList}
                        handleChange = {this.handleChange}
                        handleDelete = {this.handleDelete}
                        toggleDone = {this.toggleDone} 
                        toggleItems = {this.toggleItems}
                    />

                </div>
            </div>    
        </div>
        
      
     )
 }

}




export default App ;