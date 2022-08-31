import React from "react";
import { Link } from "react-router-dom";
import './PlayBtn.css'

function PlayBtn() {
  return (
    <>
      <Link to="/settings">
        <button className="playBtn">GO!</button>
      </Link>
    </>
  );
}

export default PlayBtn;
