import React from "react";
import { Button, Card, CardBody } from "nr1";

const centerCssProps = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const Data = ({ isLoading, data }) =>
  !isLoading && data !== null ? (
    <div style={centerCssProps}>
      <div>data: {data.name}</div>
    </div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : null;

export default class F1ActionButtonVisualization extends React.Component {
  state = {
    data: null,
    error: null,
    isLoading: false,
  };

  onClickHandler = () => {
    this.setState({ data: null, error: null, isLoading: true });
    const { requesturl } = this.props;

    fetch(requesturl)
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) =>
        res.json().then((data) => this.setState({ data, isLoading: false }))
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { data, error, isLoading } = this.state;

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
            <Data isLoading={isLoading} data={data} />
          </div>
        </CardBody>
      </Card>
    );
  }
}
