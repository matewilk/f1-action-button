import React from "react";
import { Button, Card, CardBody } from "nr1";

const centerCssProps = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

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
      <Card>
        <CardBody>
          <div style={centerCssProps}>
            <Button
              type={Button.TYPE.PRIMARY}
              onClick={this.onClickHandler}
              loading={isLoading}
            >
              Request
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}
