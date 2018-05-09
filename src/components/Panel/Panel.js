import React from "react";
import {Tabs, TabContent, TabLink} from "react-tabs-redux";
import styled from "styled-components";

class Panel extends React.Component {

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
            <p>1. Niciodata sa nu accelerezi mai tare</p>
            <p>2. Oriunde vei merge...</p>
            <p>3. Ai grija cum conduci</p>
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



export default Panel;