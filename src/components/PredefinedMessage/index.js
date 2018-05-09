import React from "react";
import PropTypes from "prop-types";
import Message from "./PredefinedMessage.style";


const PredefinedMessage = ({
  message,
  handlePredefinedMessage,
  updateKeyMessage,
  currentKeyEditing
}) => {

  let handleClick = e => {
    e.preventDefault();

    updateKeyMessage(currentKeyEditing, message);
  };

  return (
    <Message onClick={handleClick}>{message}</Message>
  )
};

PredefinedMessage.propTypes = {
  message: PropTypes.string.isRequired,
  updateKeyMessage: PropTypes.func.isRequired,
  currentKeyEditing: PropTypes.string.isRequired
};

export default PredefinedMessage;