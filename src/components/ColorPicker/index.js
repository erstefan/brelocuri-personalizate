import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const Picker = styled.div`
  padding: 15px 25px;
  background: #eee;
  margin-top: 20px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;


class ColorPicker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  colours: ["green", "blue", "red", "orange", "purple", "limegreen", "darkblue", "skyblue", "brown"]
    };

    this.getColour = this.getColour.bind(this);
	}

	getColour = colour => {
	  this.props.getTextColour(colour);
  };

	render() {
	  const { colours } = this.state;
		return (
			<Picker>
        {
          colours.map((colour, index) => (
            <Colour colour={colour} getColour={this.getColour} key={index} />
          ))
        }
      </Picker>
		);
	}
}

ColorPicker.propTypes = {
  getTextColour: PropTypes.func.isRequired
};

const Colour = ({ colour, getColour }) => {
  return (
    <span className="colour_span" onClick={() => getColour(colour) } style={{ backgroundColor: colour, borderColor: colour }} />
  )
};

Colour.propTypes = {
  colour: PropTypes.string.isRequired,
  getColour: PropTypes.func.isRequired
};

export default ColorPicker;