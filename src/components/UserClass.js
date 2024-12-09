import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy.com",
      },
    };
    //console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + " Component did mount");
    //Api call

    const data = await fetch("https://api.github.com/users/sunithaRao");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    //console.log(this.props.name + " Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar-img"></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sunithaRao</h4>
      </div>
    );
  }
}

export default UserClass;
