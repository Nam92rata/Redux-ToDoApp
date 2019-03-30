import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from 'redux';
import './App.css';
import ToDoList from './Components/todo';
// import addTodo from './Actions/index';
import { addTodo, setFilter,toggleTodo } from './Actions/index';

class App extends Component {
  handleClick = () => {
    this.props.addTodo(this.name.value);
    console.log(this.name.value);
    this.name.value='';
  }
  onClick = (e) => {
    this.props.setFilter(e.target.value);
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <br></br>
          <h1>ToDo Application</h1>
          <br></br>
          <div className="row form-group">
            < div className="col-md-3">              
            </div>
            <div className="col-md-6">            
              <input type="text" ref={input => this.name = input}  />            
              <button className="btn btn-primary ml-3" onClick ={this.handleClick.bind(this)}>Add item</button>
            </div>   
          </div>
          
          <div className="row form-group">
            < div className="col-md-3">              
            </div>
            <div className="col-md-6 ">
              Show: <button className="btn btn-primary btn-space mr-3" value="All" onClick ={e => this.onClick(e)}>All</button>            
              <button className="btn btn-primary btn-space mr-3" value="Active" onClick ={e => this.onClick(e)}>Active</button>            
              <button className="btn btn-primary btn-space mr-3" value="Completed" onClick ={e => this.onClick(e)}>Completed</button>
            </div>  
          </div>
         
          <div className="row form-group">            
            < div className="col-md-3">              
            </div>
            <div className="col-md-6">
              <ToDoList item = {this.props.user} />
            </div> 
          </div> 
        </div>     
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      user: state.todoReducer
      
  }     
  
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({addTodo, setFilter,toggleTodo}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(App);