import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../index.css";
import Batsuits from "../batsuits.json";
import SuitImg from "./SuitImg";
import Header from "./Header";

const marks = {
  1: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 1943,
  },
  2: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 1966,
  },
  3: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 1989,
  },
  4: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 1992,
  },
  5: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 1995,
  },
  6: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 1997,
  },
  7: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 2005,
  },
  8: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 2008,
  },
  9: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 2016,
  },
  10: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 2017,
  },
  11: {
    style: {
      color: "#fdff00",
      fontWeight: "200",
      fontSize: ".85rem",
      background: "#242424",
      padding: "2px",
      transform: "rotate(-50deg)",
      transformOrigin: "left",
    },
    label: 2021,
  },
};

export default function App() {
  const [suitTitle, setSuitTitle] = useState(Batsuits.batsuits[0].title);
  const [suitDetail, setSuitDetail] = useState(Batsuits.batsuits[0].detail);
  const [suitYear, setSuityear] = useState(1943);

  function handleChange(e) {
    setSuitTitle(Batsuits.batsuits[e - 1].title);
    setSuitDetail(Batsuits.batsuits[e - 1].detail);
    setSuityear(Batsuits.batsuits[e - 1].year);
  }

  return (
    <div>
      <h1 className="batslider-title">The Bat-Slider: Batsuits in Film</h1>
      <div className="batslider-container2">
        <Slider
          style={{ maxWidth: "400px" }}
          className="batslider-slider"
          min={1}
          max={11}
          marks={marks}
          step={1}
          onChange={handleChange}
          defaultValue={1}
        />
      </div>
      <div className="batslider-container">
        <SuitImg suitImgYear={suitYear} />
      </div>
      <Header suitTitle={suitTitle} suitYear={suitYear} />
      <p className="batslider-content">{suitDetail}</p>
    </div>
  );
}
