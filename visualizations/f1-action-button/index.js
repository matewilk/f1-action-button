import React from "react";
import { Button } from "nr1";

export default class F1ActionButtonVisualization extends React.Component {
  state = {
    data: null,
    error: null,
    isLoading: false,
  };

  onClickHandler = () => {
    this.setState({ data: null, error: null, isLoading: true });
    const { requesturl } = this.props;

    console.log(requesturl);

    fetch(requesturl)
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) =>
        res.json().then((data) => this.setState({ data, isLoading: false }))
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { data, error, isLoading } = this.state;
    console.log("data", data);
    console.log("error", error);

    return (
      <div>
        <Button onClick={this.onClickHandler} loading={isLoading}>
          Request
        </Button>
      </div>
    );
  }
}
