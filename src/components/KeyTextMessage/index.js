import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const KeyTextMessageWrapper = styled.div`

`;

class KeyTextMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      front: '',
      back: '',
      fab: '',
      fabCheckbox: true
    };

    this.updateFrontAndBack = this.updateFrontAndBack.bind(this);
    this.updateField = this.updateField.bind(this);

    // Fields
    this.updateFrontField = this.updateFrontField.bind(this);
    this.updateBackField = this.updateBackField.bind(this);
    this.updateFabField = this.updateFabField.bind(this);
    this.updateCheckboxField = this.updateCheckboxField.bind(this);
  }


  // componentDidMount() {
  // 	if (this.props.frontAndBack) {
  // 	  this.setState({ checked : this.props.frontAndBack});
  //   }
  // }

  updateFrontAndBack = e => {
    this.props.updateFrontAndBack({
      front_and_back: this.state.fabCheckbox,
      fab: this.state.fab,
      front: this.state.front,
      back: this.state.back
    });
  };

  updateFrontField = e => {
    this.setState({front: e.target.value});
    this.updateFrontAndBack()
  };
  updateBackField = e => {
    this.setState({back: e.target.value});
    this.updateFrontAndBack()
  };

  updateFabField = e => {
    this.setState({fab: e.target.value});
    this.updateFrontAndBack();
  };
  updateCheckboxField = e => {
    this.setState({fabCheckbox: !!e.target.checked});
    if (this.state.fabCheckbox) {
      this.setState({
        front: this.state.fab
      })
    } else {
      this.setState({
        front: '',
        back: ''
      })
    }
  };

  updateField = e => {
    // this.setState({
    //   front: e.target.value,
    //   back: e.target.value,
    //   fabCheckbox: e.target.checked,
    //   text: e.target.value
    // });

    // if (e.target.name === 'fabCheckbox') {
    //  this.setState({
    //    fabCheckbox: !!e.target.checked
    //  })
    // }
    // this.setState({
    //
    // });
  };


  render() {
    const {frontAndBack} = this.props;
    const {front, back, fab} = this.state;

    return (
      <KeyTextMessageWrapper>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form onChange={this.updateFrontAndBack}>
          <label htmlFor="frontAndBack">Fata & verso
            <input type="checkbox"
                   checked={this.state.fabCheckbox}
                   onChange={this.updateCheckboxField}
                   name={"fabCheckbox"}
            />
            {this.state.fabCheckbox ?
              <input type="text"
                     name={"fab"}
                     value={fab}
                     onChange={this.updateFabField}
                     placeholder={"Introduceti textul dorit"}/> :
              <div>
                <input type="text"
                       name={"front"}
                       value={front}
                       onChange={this.updateFrontField}
                       placeholder={"Text pe fata"}
                />
                <input type="text"
                       name={"back"}
                       value={back}
                       onChange={this.updateBackField}
                       placeholder={"Text pe verso"}
                />
              </div>}
          </label>
        </form>

      </KeyTextMessageWrapper>
    );
  }
}

KeyTextMessage.propTypes = {
  frontAndBack: PropTypes.bool.isRequired
};

export default KeyTextMessage;