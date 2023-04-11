import React from 'react'
import "./QRCodeApp.scss";
import bgImage from "../../assets/qrcode/images/image-qr-code.png";
export const QRCodeApp = () => {
  return (
    <>
      <div class="section-qrcode">
      <div class="card">
        <img src={bgImage} alt="" class="card-image"/>
        <div class="text">
          <h2 >
            Improve your front-end skills by building projects
          </h2>
          <p >
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
