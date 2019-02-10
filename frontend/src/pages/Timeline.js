import React, { Component } from "react";

import twitterLogo from "../twitter.svg";
import "./Timeline.css";

export default class Timeline extends Component {
  state = {
    newTweet: ""
  };

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value });
  };
  render() {
    const { newTweet } = this.state;
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="Twitter Logo" />
        <form>
          <textarea
            value={newTweet}
            onChange={this.handleInputChange}
            placeholder="O que está acontecendo?"
          />
        </form>
      </div>
    );
  }
}
