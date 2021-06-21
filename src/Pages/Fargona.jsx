import React, { useState, useEffect } from "react";
import HijriDate from "../components/HijriDate";
import Loading from "../components/Loading";
import "../styles/Timings.css";

function Toshkent() {
  const [timings, setTimings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = () => {
      fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=Fargona&country=Uzbekistan&method=3&school=1"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTimings(data.data.timings);
        });
    };
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <HijriDate />
        <div className="row">
          <div className="col-10 col-sm-12 col-md-6 col-lg-4">
            <div className="box">
              <h3 className="box-name">Bamdod</h3>
              <span className="box-timing">{timings.Fajr}</span>
            </div>
          </div>
          <div className="col-10 col-sm-12 col-md-6 col-lg-4">
            <div className="box">
              <h3 className="box-name">Quyosh</h3>
              <span className="box-timing">{timings.Sunrise}</span>
            </div>
          </div>
          <div className="col-10 col-sm-12 col-md-6 col-lg-4">
            <div className="box">
              <h3 className="box-name">Peshin</h3>
              <span className="box-timing">{timings.Dhuhr}</span>
            </div>
          </div>
          <div className="col-10 col-sm-12 col-md-6 col-lg-4">
            <div className="box">
              <h3 className="box-name">Asr</h3>
              <span className="box-timing">{timings.Asr}</span>
            </div>
          </div>
          <div className="col-10 col-sm-12 col-md-6 col-lg-4">
            <div className="box">
              <h3 className="box-name">Shom</h3>
              <span className="box-timing">{timings.Maghrib}</span>
            </div>
          </div>
          <div className="col-10 col-sm-12 col-md-6 col-lg-4">
            <div className="box">
              <h3 className="box-name">Xufton</h3>
              <span className="box-timing">{timings.Isha}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toshkent;
