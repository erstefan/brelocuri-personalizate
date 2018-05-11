import React from 'react';
import ProductColours from "./ProductColours/ProductColours";
import Panel from "./Panel/Panel";
import {connect} from "react-redux";
import {updateProductColour} from "../actions/index";


class KeyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productColour: '',
      frontMessage: '',
      backMessage: '',
      currentKeyEditing: 'front',
      textColour: '#222',
      front_and_back: true,
      plateNumber: {
        city: '',
        number: '',
        code: ''
      }
    };

    this.handleProductColourChange = this.handleProductColourChange.bind(this);
    this.setPlateNumber = this.setPlateNumber.bind(this);
    this.setTextColour = this.setTextColour.bind(this);
    this.setFrontAndBack = this.setFrontAndBack.bind(this);
  }

  handleProductColourChange = e => {
    // this.setState({productColour: e.target.value});
    this.props.updateProductColour(e.target.value);
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

  setFrontAndBack = data => {
    // console.log('setFrontAndBack values', val);
    if (data.front_and_back) {
      this.setState({
        front_and_back: true,
        frontMessage: data.fab,
        backMessage: data.fab
      });
    } else {
      this.setState({
        front_and_back: false,
        frontMessage: data.front,
        backMessage: data.back
      })
    }
  };

  render() {

    console.log(this.props);

    return (
      <div className="App">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <ProductColours />
        <h3>Editeaza brelocului</h3>
        <Panel setKeyMessage={this.updateKeyMessage}
               updateKeyMessage={this.updateKeyMessage}
               currentKeyEditing={this.state.currentKeyEditing}
               setPlateNumber={this.setPlateNumber}
               setTextColour={this.setTextColour}
               frontAndBack={this.state.front_and_back}
               setFrontAndBack={this.setFrontAndBack}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>  {
  return {
    updateProductColour: colour => {
      dispatch(updateProductColour(colour))
    }
  }
};

function mapStateToProps(state) {
  console.log('state', state);
  return {
    front: state.frontMessage,
    back: state.backMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyEditor);