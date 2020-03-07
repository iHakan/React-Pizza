import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      selectedPizza: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(json => this.setState({pizzas: json}))
  }

  clickHandler = (pizza) => {
    this.setState({selectedPizza: pizza}, () => console.log(this.state.selectedPizza))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza}/>
        <PizzaList pizzas={this.state.pizzas} clickHandler={this.clickHandler}/>
      </Fragment>
    );
  }
}

export default App;
