import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [],
    }
    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
  }

  addGroceryItem (description, quantity) {
    $.ajax({
      url: '/groceries',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ description, quantity }), 
      success: (data) => {
        this.getGroceries();
      },
      error: (xhr, status, error) => {
        console.log('err', xhr, status, error);
      }
    });
  }
  
  getGroceries () {
    $.ajax({
      url: '/groceries', 
      success: (data) => {
        this.setState({
          list: data
        });
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    this.getGroceries();
  }
  
  render () {
    console.log('LIST: ', this.state.list)
    return (<div>
      <h1>Grocery List</h1>
      <AddGrocery onAdd={this.addGroceryItem}/>
      <GroceryList list={this.state.list}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));