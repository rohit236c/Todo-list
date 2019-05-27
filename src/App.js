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
                    <h2 className="text-center text-captailize">hey there</h2>
                    <TodoList />

                    <TodoInput/>
                </div>
            </div>    
        </div>
        
         
     )
 }

}




export default App ;