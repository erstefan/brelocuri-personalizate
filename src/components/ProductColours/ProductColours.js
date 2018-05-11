import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateProductColour} from "../../actions/index";

class ProductColours extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.props.updateColour(e.target.value);
  };

  render() {
    return (
      <ProductColoursWrapper>
        <div className="colour">
          <label htmlFor="productSilver">Silver
            <input type="radio"
                   name={"product_colour"}
                   onClick={this.handleChange}
                   value={"silver"}
                   id="productSilver"/>
          </label>
        </div>

        <div className="colour">
          <label htmlFor="productGold">Gold
            <input type="radio"
                   name={"product_colour"}
                   id="productGold"
                   onClick={this.handleChange}
                   value={"gold"}/>
          </label>
        </div>
      </ProductColoursWrapper>
    );
  }
}

ProductColours.propTypes = {
  updateColour: PropTypes.func.isRequired
};


const ProductColoursWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  
  .colour {
    border: 1px solid #ccc;
    padding: 10px 15px;
    margin-right: 10px;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    updateColour: colour => {
      dispatch(updateProductColour(colour))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductColours);