import React from "react";
import PropTypes from "prop-types";
import Message from "./PredefinedMessage.style";
import {connect} from "react-redux";
import {updateFrontAndBackMessage} from "../../actions/index";


const PredefinedMessage = ({
  message,
 updateMessage
}) => {

  let handleClick = e => {
    e.preventDefault();
    updateMessage(message);
  };

  return (
    <Message onClick={handleClick}>{message}</Message>
  )
};

PredefinedMessage.propTypes = {
  message: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: message => {
      dispatch(updateFrontAndBackMessage(message))
    }
  }
};

export default connect(null, mapDispatchToProps)(PredefinedMessage);