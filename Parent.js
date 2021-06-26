import React from "react";
import Child from "./component/child";

class parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  changevaalue = (childvalue) => {
    this.setState({ name: childvalue });
  };

  render() {
    return (
      <div>
        <Child parentCallback={this.changevaalue} />
        <p> {this.state.name} </p>
      </div>
    );
  }
}

export default parent;
