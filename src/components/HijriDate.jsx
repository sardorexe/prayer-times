import React, { useState, useEffect } from "react";

function HijriDate() {
  const [date, setDate] = useState("");
  const [hijri, setHijri] = useState("");
  useEffect(() => {
    fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=Toshkent&country=Uzbekistan&method=3&school=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDate(data.data.date.gregorian.date);
        setHijri(data.data.date.hijri.date)
      });
  }, []);
  return (
    <div className="today col-sm-12 col-12 col-md-12 col-lg-12">
      <h2 className="title">BUGUN</h2>
      <h6 className="milodiy">Milodiy: {date}</h6>
      <h6 className="hijri">Hijriy: {hijri}</h6>
    </div>
  );
}

export default HijriDate;
