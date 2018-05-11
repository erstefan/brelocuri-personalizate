import {
  SET_PLATE_NUMBER, SET_TEXT_COLOUR, UPDATE_FRONT_AND_BACK_KEY_MESSAGE, UPDATE_KEY_BACK_MESSAGE,
  UPDATE_KEY_FRONT_MESSAGE,
  UPDATE_PRODUCT_COLOUR
} from "../constants/action-types";

export const updateProductColour = colour => ({
  type: UPDATE_PRODUCT_COLOUR,
  colour
});

export const updateKeyFrontMessage = message => ({
  type: UPDATE_KEY_FRONT_MESSAGE,
  message
});

export const updateKeyBackMessage = message => ({
  type: UPDATE_KEY_BACK_MESSAGE,
  message
});

export const updateFrontAndBackMessage = message => ({
  type: UPDATE_FRONT_AND_BACK_KEY_MESSAGE,
  message
});

export const setPlateNumber = plate => ({
  type: SET_PLATE_NUMBER,
  plate
});

export const setTextColour = colour => ({
  type: SET_TEXT_COLOUR,
  colour
});