import React from "react";
import { Button } from "nr1";

export default class F1ActionButtonVisualization extends React.Component {
  onClickHandler = () => {
    const { requesturl } = this.props;

    console.log(requesturl);
  };

  render() {
    return (
      <div>
        <Button onClick={this.onClickHandler}>Request</Button>
      </div>
    );
  }
}
