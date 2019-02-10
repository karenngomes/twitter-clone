import React from "react";

import like from "../like.svg";
import "./Tweet.css";

const Tweet = ({ tweet }) => {
  return (
    <li className="tweet">
      <strong>{tweet.author}</strong>
      <p>{tweet.content}</p>
      <button type="submit">
        <img src={like} alt="Like button" />
        {tweet.likes}
      </button>
    </li>
  );
};

export default Tweet;
