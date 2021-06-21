import React from "react";
import img from "./notfoundimg.svg";
import { Link } from "react-router-dom";
import "./NotFound.css"

function NotFound() {
  return (
    <div className="container">
      <div className="box-img col-sm-4 col-4 col-md-2 col-lg-2">
        <img src={img} alt="img" />
      </div>
      <div className="box-content col-sm-10 col-10 col-md-8 col-lg-5">
        <h2 className="first-text">Xato!</h2>
        <p className="second-text">
          Siz izlayotgan manzil bo'yicha ma'lumot topilmadi.<br />
          <Link to="/">Bosh sahifa</Link> ga qaytib manzilni to'g'ri
          kiritganingizga ishonch hosil qiling!
        </p>
      </div>
    </div>
  );
}

export default NotFound;
