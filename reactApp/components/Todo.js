import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      this.props.completed ?
      <li onClick={()=>this.props.click()}><button onClick={()=>this.props.xClick()}>X</button><strike> {this.props.task}</strike></li>
      :
      <li onClick={()=>this.props.click()}><button onClick={()=>this.props.xClick()}>X</button> {this.props.task}</li>
    )
  }
}

export default Todo;
