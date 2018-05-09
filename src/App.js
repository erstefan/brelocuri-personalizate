import React from 'react';
import './App.css';
import ProductColours from "./components/ProductColours/ProductColours";
import Panel from "./components/Panel/Panel";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productColour: ''
    };

    this.handleProductColourChange = this.handleProductColourChange.bind(this);
  }

  handleProductColourChange = e => {
    this.setState({ productColour: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <ProductColours onProductColourChange={this.handleProductColourChange}/>
        <h3>Editeaza fata brelocului</h3>
        <Panel />
      </div>
    );
  }
}

export default App;
