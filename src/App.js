import React from 'react';
import './App.css';
import ProductColours from "./components/ProductColours/ProductColours";
import Panel from "./components/Panel/Panel";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productColour: '',
      frontMessage: '',
      backMessage: '',
      currentKeyEditing: 'front'
    };

    this.handleProductColourChange = this.handleProductColourChange.bind(this);
  }

  handleProductColourChange = e => {
    this.setState({ productColour: e.target.value });
  };

  updateKeyMessage = (position, message) => {
    const { currentKeyEditing } = this.state;
    console.log('position', position);

    if (currentKeyEditing === '') {
      this.setState({
        frontMessage: message,
        backMessage: message
      });
    }

    if (currentKeyEditing === 'front')
      this.setState({ frontMessage: message });
    if (currentKeyEditing === 'back')
      this.setState({ backMessage: message });
  };

  render() {
    return (
      <div className="App">
        <ProductColours onProductColourChange={this.handleProductColourChange}/>
        <h3>Editeaza fata brelocului</h3>
        <Panel setKeyMessage={this.updateKeyMessage}
               updateKeyMessage={this.updateKeyMessage}
              currentKeyEditing={this.state.currentKeyEditing}
        />
      </div>
    );
  }
}

export default App;
