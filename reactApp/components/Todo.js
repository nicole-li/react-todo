import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      this.props.completed ?
      <li><button>X</button><strike> {this.props.task}</strike></li>
      :
      <li><button>X</button> {this.props.task}</li>
    )
  }
}

export default Todo;
