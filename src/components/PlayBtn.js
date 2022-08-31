import React from "react";
import { Link } from "react-router-dom";
import './PlayBtn.css'

function PlayBtn() {
  return (
    <>
      <Link to="/settings">
        <button className="playBtn">Play</button>
      </Link>
    </>
  );
}

export default PlayBtn;
