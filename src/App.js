import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends React.Component{

 render(){
     return (
         
         <div>
             hey there
            <TodoInput />
            <TodoList />
         </div>
         
     )
 }

}




export default App ;