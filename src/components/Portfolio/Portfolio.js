import React from "react";
import "./Portfolio.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Portfolio() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      // backDelay: 1500,
      // backSpeed:60,
      strings: [".", "..", "..."],
    });
  });


  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div className="p-img">
        <div className="card-1">
        <img src="assets/calculator.png" alt="" />
        <p>A beginner level project made with the react </p>
        </div>
        <div className="card-2">
        <img  className="card-2" src="assets/keeper.png" alt="" />
        <p>A modern styles ToDo list made using react </p>
        </div>
        <div className="card-3">
        <img src="assets/E-commerce.png" alt="" />
        <p> An ecommerce site "Nilara" using react</p>
        </div>
      </div>
      <h3>
        Check out the above prjects in my Github account 👉👉 
        <a className="github" href="https://github.com/choubeyji246">
           Link
        </a>
      </h3>
      <h1>Mern stack Developer - Loading <span ref={textRef}></span></h1>
    </div>
  );
}
