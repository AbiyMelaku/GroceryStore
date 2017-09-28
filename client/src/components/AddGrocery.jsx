import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: '',
      quantity: ''
    }
    this.updateDescription = this.updateDescription.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.add = this.add.bind(this);
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  updateQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  add() {
    this.props.onAdd(this.state.description, this.state.quantity);
  }
  
  render () {
    return (<div>
      Description: <input onChange={this.updateDescription} value={this.state.description}></input>
      <br />
      Quantity: <input onChange={this.updateQuantity} value={this.state.quantity}></input>
      <button onClick={this.add}>Add Grocery</button>
    </div>)
  }
}

export default AddGrocery;
