import { useState } from "react";

import "./styles.css";
import "./cssStyles/GeneralStyles.css";

import { BrowserRouter as BrRouter, Routes, Route } from "react-router-dom";
//*components
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import { FindUser } from "./pages/FindUser";

import Slider from "@mui/material/Slider";

export default function App() {
  const [darkTheme, setDarkTheme] = useState<any>("");

  function valuetext(value: number) {
    if (value < 10) return setDarkTheme("white-theme");
    if (value > 10 && value <= 35) return setDarkTheme("white-theme-partTwo");
    if (value > 35 && value < 60) return setDarkTheme("white-theme-partThree");
    if (value > 60 && value < 85) return setDarkTheme("white-theme-partFour");
    if (value > 85) return setDarkTheme("dark-theme");
  }

  return (
    <section className={`App ${darkTheme}`}>
      <BrRouter>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          getAriaValueText={valuetext}
          color="primary"
        />
        <div>change color</div>
        <Routes>
          {/*recurda el orden, siempre dejar la ruta más general al final*/}
          <Route path="/user/:id" element={<Users />} />
          <Route path="/user" element={<FindUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrRouter>
    </section>
  );
}
