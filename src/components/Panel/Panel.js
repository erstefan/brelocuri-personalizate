import React from "react";
import {Tabs, TabContent, TabLink} from "react-tabs-redux";
import PredefinedMessage from "../PredefinedMessage/index";
import PropTypes from "prop-types";
import PlateNumberForm from "../../PlateNumberForm/index";
import ColorPicker from "../ColorPicker/index";

class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.handlePredefinedMessage = this.handlePredefinedMessage.bind(this);
    this.updateKeyMessage = this.updateKeyMessage.bind(this);
    this.handlePlateNumber = this.handlePlateNumber.bind(this);
  }

  handlePredefinedMessage = e => {
    console.log(e);
  };

  updateKeyMessage = (position, message) => {
    this.props.setKeyMessage(position, message);
  };

  handlePlateNumber = data => {
    // Needs field validation
    this.props.setPlateNumber(data);
  };

  getTextColour = colour => {
    this.props.setTextColour(colour);
  };

  render() {
    return (
      <Tabs className={'tabs__wrapper'}>

       <div className="tablinks__wrapper">
         <TabLink to={"message"}>Mesaje standard</TabLink>
         <TabLink to={"plate"}>Nr. Auto</TabLink>
         <TabLink to={"customise"}>Personalizare</TabLink>
       </div>

        <div className="panels__wrapper">
          <TabContent for="message">
            <PredefinedMessage
              updateKeyMessage={this.updateKeyMessage}
              message={"Niciodata sa nu accelerezi mai tare"}
              currentKeyEditing={this.props.currentKeyEditing}
            />
            <PredefinedMessage
              updateKeyMessage={this.updateKeyMessage}
              message={"Oriunde vei merge..."}
              currentKeyEditing={this.props.currentKeyEditing}
            />
            <PredefinedMessage
              updateKeyMessage={this.updateKeyMessage}
              message={"Ai grija cum conduci"}
              currentKeyEditing={this.props.currentKeyEditing}
            />
          </TabContent>

          <TabContent for={"plate"}>
            <PlateNumberForm handlePlateNumber={this.handlePlateNumber} />
          </TabContent>

          <TabContent for={"customise"}>
            <div className="custom__text">
              <input type="text" placeholder={"Introduceti textul dorit"} />
            </div>

            <ColorPicker getTextColour={this.getTextColour} />
          </TabContent>
        </div>
      </Tabs>
    );
  }
}

Panel.propTypes = {
  updateKeyMessage: PropTypes.func.isRequired,
  currentKeyEditing: PropTypes.string.isRequired,
  setKeyMessage: PropTypes.func.isRequired,
  setPlateNumber: PropTypes.func.isRequired,
  setTextColour: PropTypes.func.isRequired
};


export default Panel;