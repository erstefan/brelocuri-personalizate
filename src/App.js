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
      currentKeyEditing: 'front',
      textColour: '#222',
      plateNumber: {
        city: '',
        number: '',
        code: ''
      }
    };

    this.handleProductColourChange = this.handleProductColourChange.bind(this);
    this.setPlateNumber = this.setPlateNumber.bind(this);
    this.setTextColour = this.setTextColour.bind(this);
  }

  handleProductColourChange = e => {
    this.setState({productColour: e.target.value});
  };

  updateKeyMessage = (position, message) => {
    const {currentKeyEditing} = this.state;
    console.log('position', position);

    if (currentKeyEditing === '') {
      this.setState({
        frontMessage: message,
        backMessage: message
      });
    }

    if (currentKeyEditing === 'front')
      this.setState({frontMessage: message});
    if (currentKeyEditing === 'back')
      this.setState({backMessage: message});
  };

  setPlateNumber = plate => {
    this.setState(prevState => ({
      ...prevState,
      plateNumber: {
        ...plate
    }
    }));
  };

  setTextColour = c => {
    this.setState({ textColour: c });
  };

  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <ProductColours onProductColourChange={this.handleProductColourChange}/>
        <h3>Editeaza fata brelocului</h3>
        <Panel setKeyMessage={this.updateKeyMessage}
               updateKeyMessage={this.updateKeyMessage}
               currentKeyEditing={this.state.currentKeyEditing}
               setPlateNumber={this.setPlateNumber}
               setTextColour={this.setTextColour}
        />
      </div>
    );
  }
}

export default App;
