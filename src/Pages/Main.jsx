import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main container">
      <h5 className="container-title">Hududingizni tanlang</h5>
      <div className="row">
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/tashkent" className="link">
              Toshkent
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/xarezm" className="link">
              Xorazm
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/andijan" className="link">
              Andijon
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/jizzakh" className="link">
              Jizzax
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/navaiy" className="link">
              Navoiy
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/bukhara" className="link">
              Buxoro
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/ferghana" className="link">
              Farg'ona
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/samarkand" className="link">
              Samarqand
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/namangan" className="link">
              Namangan
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/qashqadaryo" className="link">
              Qashqadaryo
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/sirdaryo" className="link">
              Sirdaryo
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
        <div className="col-10 col-sm-9 col-md-6 col-lg-4">
          <div className="box">
            <Link to="/surxandaryo" className="link">
              Surxandaryo
            </Link>
            <span className="text">Viloyati</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
