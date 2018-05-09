import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class ProductColours extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ProductColoursWrapper>
        <div className="colour">
          <label htmlFor="productSilver">Silver
            <input type="radio"
                   name={"product_colour"}
                   onChange={this.props.onProductColourChange}
                   value={"silver"}
                   id="productSilver"/>
          </label>
        </div>

        <div className="colour">
          <label htmlFor="productGold">Gold
            <input type="radio"
                   name={"product_colour"}
                   id="productGold"
                   onChange={this.props.onProductColourChange}
                   value={"gold"}/>
          </label>
        </div>
      </ProductColoursWrapper>
    );
  }
}

ProductColours.propTypes = {
  onProductColourChange: PropTypes.func.isRequired
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

export default ProductColours;