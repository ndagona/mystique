import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Switcher1 from "./elements/toggle";
import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Home from "./Home/Home";
function Index() {
  const { theme, setTheme, themes } = useContext(ThemeContext);
  const bg = themes.themes[theme]["colors"]["background"]["primary"];

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundColor: bg,
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Switcher1 theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<p>Not home, damn</p>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Index;
