import Switcher1 from "../elements/toggle";
import "./Home.css";
import "./Home2.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Sidebar from "../nav/Sidebar";
import hamburgerMenu from "../../assets/icons/main/hamburger-menu.png";

const Home = () => {
  const { theme, setTheme, themes } = useContext(ThemeContext);
  const bg = themes.themes[theme]["colors"]["background"]["primary"];
  const icon_filter = themes.themes[theme]["colors"]["filter"];
  const [show_menu, setShow_menu] = useState();

  const handleToggleMenu = () => {
    setShow_menu(show_menu === "none" ? "block" : "none");
    console.log(`Changed menu display to ${show_menu}`);
  };

  return (
    <main className="homeContainer">
      <Switcher1 theme={theme} setTheme={setTheme} />
      <div className="nav" style={{ display: show_menu }}>
        <Sidebar />
      </div>
      <article
        className="toggleMenu"
        tabIndex={0}
        onClick={handleToggleMenu}
        style={{ display: "none", cursor: "pointer", zIndex: 10 }}
      >
        <img
          src={hamburgerMenu}
          alt="menu"
          style={{
            width: "35px",
            height: "35px",
            marginLeft: "10px",
            marginRight: "15px",
            filter: icon_filter,
            cursor: "pointer",
          }}
          tabIndex={-1}
          className="hamburgerMenu"
        />
      </article>
    </main>
  );
};
export default Home;
