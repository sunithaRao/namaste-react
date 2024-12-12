import React from "react";
import UserClass from "./UserClass";
import { UserContext } from "../utils/UserContext";

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
        <h1>About : Class Component</h1>
        <div>
          Loggedin User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>

        <UserClass name="First" location="Visakhapatnam" />
      </div>
    );
  }
}

export default About;
