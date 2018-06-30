import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['Come to SF', 'Master React', 'Sleep'];

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map((todo) => <Todo task={todo}/>)}
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
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
