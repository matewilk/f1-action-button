import React from "react";
import { Button } from "nr1";

export default class F1ActionButtonVisualization extends React.Component {
  onClickHandler = () => {
    const { requesturl } = this.props;

    console.log(requesturl);
    
    fetch(requesturl)
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json().then((data) => console.log(data)))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Button onClick={this.onClickHandler}>Request</Button>
      </div>
    );
  }
}
