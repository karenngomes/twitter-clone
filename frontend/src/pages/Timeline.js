import React, { Component } from "react";
import api from "../services/api";

import twitterLogo from "../twitter.svg";
import "./Timeline.css";

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: ""
  };

  async componentDidMount() {
    const response = await api.get("tweets");

    this.setState({ tweets: response.data });
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@GoTwitter:username");

    await api.post("tweets", { content, author });

    this.setState({ newTweet: "" });
  };

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value });
  };

  render() {
    const { tweets, newTweet } = this.state;
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="Twitter Logo" />
        <form>
          <textarea
            value={newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>
        {tweets.map((tweet, i) => (
          <h1 key={i}>{tweet.content}</h1>
        ))}
      </div>
    );
  }
}
