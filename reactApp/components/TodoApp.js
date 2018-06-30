import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';

var dummyData = [
  {taskText: 'Come to SF', completed: true},
  {taskText: 'Master React', completed: false},
  {taskText: 'Sleep', completed: false}
];

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todos: [],
    }
  }

  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
