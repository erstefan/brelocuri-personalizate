import React from 'react';
import PropTypes from "prop-types";

class PlateNumberForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		    city: '',
        number: '',
        code: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleForm = this.handleForm.bind(this);
	}

  handleForm = e => {
	  e.preventDefault();

	  this.props.handlePlateNumber(this.state);
  };

	handleInput = e => {
	  e.persist();
    this.setState(prevState => ({
        ...prevState,
        [e.target.name] : e.target.value
    }));
  };

	render() {
		return (
      <form onSubmit={this.handleForm}>
        <input type="text"
               className="form__input form__input-city"
               name={"city"}
               onChange={this.handleInput}
               maxLength={2}
        />
        <input type="number"
               className="form__input form__input-number"
               name={"number"}
               onChange={this.handleInput}
               maxLength={2}
               pattern="[0-9]*"
        />
        <input type="text"
               className="form__input  form__input-code"
               name={"code"}
               onChange={this.handleInput}
               maxLength={3}
        />
        <button type={"submit"}>Salveaza</button>
      </form>
		);
	}
}

PlateNumberForm.propTypes = {
  handlePlateNumber: PropTypes.func.isRequired
};
export default PlateNumberForm;