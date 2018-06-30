import React from 'react';

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state={
      typedText: ''
    }
  }

  handleTyping(event){
    this.setState({
      typedText: event.target.value
    })
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    })
  }

  render() {
    return (
      <div>
        <input
        value={this.state.typedText}
        onChange={(event) => this.handleTyping(event)}
        type="text" placeholder="task"
        />
        <button onClick={() => this.handleSubmit()}>Add todo</button>
      </div>
    )
  }
}

export default InputLine;
