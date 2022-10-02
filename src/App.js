import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import "./App.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
function App() {
const[menuopen, setMenuopen]=useState(false)


  return (
    <div className="app">
       <Topbar  menu={menuopen} setMenu={setMenuopen} />
       <Menu menu={menuopen} setMenu={setMenuopen}/>
      <div className="sections">
       <Intro/>
       <Portfolio/>
       <Work/>
       <Testimonial/>
       <Contact/>
      </div>
    </div>
  );
}

export default App;
