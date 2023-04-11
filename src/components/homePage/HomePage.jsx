import React, { useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <h1 className="heading">React Challenges From Front-end Mentor</h1>
      <span className="underLine"></span>
      <span className="challenges">
        {/* QR CODE PROJECT */}
        <Link className="challenge" to="/qrcodeApp">
          <span className="challengeHeading">Qr Code Challenge</span>
        </Link>
        {/*  */}
        <Link className="challenge" to="/todoApp">
          <span className="challengeHeading">To DO App</span>
        </Link>
        <Link className="challenge" to="/qrcodeApp">
          <span className="challengeHeading">Qr Code Challenge</span>
        </Link>
        <Link className="challenge" to="/qrcodeApp">
          <span className="challengeHeading">Qr Code Challenge</span>
        </Link>
      </span>
    </div>
  );
};
