import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent ComponenentDidMount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <UserClass name="First" location="Visakhapatnam" />
      </div>
    );
  }
}

export default About;
