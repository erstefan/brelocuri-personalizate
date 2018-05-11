
import {
  SET_PLATE_NUMBER, SET_TEXT_COLOUR, UPDATE_FRONT_AND_BACK_KEY_MESSAGE, UPDATE_KEY_BACK_MESSAGE,
  UPDATE_KEY_FRONT_MESSAGE,
  UPDATE_PRODUCT_COLOUR
} from "../constants/action-types";

const initialState = {
  productColour: 'red',
  frontMessage: '',
  backMessage: '',
  textColour: '',
  plateNumber: ''
};

const rootReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_PRODUCT_COLOUR:
      return {
        ...state,
        productColour: action.colour
      };
    case UPDATE_KEY_FRONT_MESSAGE:
      return {
        ...state,
        frontMessage: action.message
      };
    case UPDATE_KEY_BACK_MESSAGE:
      return {
        ...state,
        backMessage: action.message,
      };
    case UPDATE_FRONT_AND_BACK_KEY_MESSAGE:
      return {
        ...state,
        frontMessage: action.message,
        backMessage: action.message,
      };
    case SET_PLATE_NUMBER:
      return {
        ...state,
        plateNumber: action.plate
      };
    case SET_TEXT_COLOUR:
      return {
        ...state,
        textColour: action.colour
      };
    default:
      return state;
  }
};

export default rootReducer;