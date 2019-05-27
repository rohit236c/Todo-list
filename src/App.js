import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends React.Component{

 render(){
     return (
        <div className="container">
            <div class="row">
                <div class="col-10 mx-auto col-md-8 mt-4">
                    <h2 className="text-center text-captailize">Plain JavaScript To-Do List
                    </h2>
                    <h4 className="text-center text-captailize text-secondary">Quick and Dirty</h4>

                    <TodoInput/>
                    <TodoList />
                </div>
            </div>    
        </div>
        
         
     )
 }

}




export default App ;