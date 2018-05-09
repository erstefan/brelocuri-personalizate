import React from "react";
import {Tabs, TabContent, TabLink} from "react-tabs-redux";
import PredefinedMessage from "../PredefinedMessage/index";
import PropTypes from "prop-types";

class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.handlePredefinedMessage = this.handlePredefinedMessage.bind(this);
    this.updateKeyMessage = this.updateKeyMessage.bind(this);
  }

  handlePredefinedMessage = e => {
    console.log(e);
  };

  updateKeyMessage = (position, message) => {
    this.props.setKeyMessage(position, message);
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
            <input type="text" placeholder={'Numar auto'}/>
          </TabContent>

          <TabContent for={"customise"}>
            <span>Personalizare....</span>
          </TabContent>
        </div>
      </Tabs>
    );
  }
}

Panel.propTypes = {
  updateKeyMessage: PropTypes.func.isRequired,
  currentKeyEditing: PropTypes.string.isRequired,
  setKeyMessage: PropTypes.func.isRequired
};


export default Panel;