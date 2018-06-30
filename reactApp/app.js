import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = [
  {taskText: 'Come to SF', completed: true},
  {taskText: 'Master React', completed: false},
  {taskText: 'Sleep', completed: false}
];

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => <Todo task={todo.taskText} completed={todo.completed}/>)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      this.props.completed ?
      <li><button>X</button><strike>{this.props.task}</strike></li>
      :
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

class InputLine extends React.Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="task" />
        <button>Add todo</button>
      </div>
    )
  }
}

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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
