import React from "react";
import "./App.css";
import DateButton from "./DateButton";
import DateDisplay from "./DateDisplay";
import { API } from "./APi/RestApi";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: {},
    };
  }

  handleBtnCleck = async () => {
    await API()
      .then((res) => this.setState({ response: res }))
      .catch((err) => console.log(err));
  };

  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <h4>Today's Date</h4>
        <DateButton handleBtnCleck={this.handleBtnCleck} />
        <DateDisplay date={response.date} />
      </div>
    );
  }
}

export default App;
