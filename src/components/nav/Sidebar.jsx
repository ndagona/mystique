import "./sidebar.css";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import youtube_icon from "../../assets/icons/nav-bar-icons/youtube.png";
import x_icon from "../../assets/icons/nav-bar-icons/x.png";
import mp3_icon from "../../assets/icons/nav-bar-icons/mp3.png";
import insta_icon from "../../assets/icons/nav-bar-icons/insta.png";
import spotify_icon from "../../assets/icons/nav-bar-icons/spotify.png";
import tiktok_icon from "../../assets/icons/nav-bar-icons/tiktok.png";
import music_icon from "../../assets/icons/nav-bar-icons/music-player.png";

const Sidebar = () => {
  const { theme, themes, eminence } = useContext(ThemeContext);

  const bg = themes.themes[theme]["colors"]["background"]["primary"];
  const bg2 = themes.themes[theme]["colors"]["surface"]["tertiary"];
  const info = themes.themes[theme]["colors"]["primary"]["50"];
  const textColor = themes.themes[theme]["colors"]["text"]["inverse"];
  const textColorInv = themes.themes[theme]["colors"]["text"]["primary"];
  const boxShadow = eminence["shadows"]["levels"]["xs"];
  const fontSize = "1.2rem";
  const data = {
    Downloads: {
      YouTube: {
        icon: youtube_icon,
      },
      Instagram: { icon: insta_icon },
      TikTok: { icon: tiktok_icon },
      Spotify: { icon: spotify_icon },
    },
    "Manage Socials": {
      YouTube: {
        icon: youtube_icon,
      },
      Twitter: { icon: x_icon },
      Instagram: { icon: insta_icon },
      TikTok: { icon: tiktok_icon },
      Spotify: { icon: spotify_icon },
    },
    Converters: {
      VidToMp3: { icon: mp3_icon },
    },
    Utilities: {
      "Music Player": { icon: music_icon },
    },
  };

  return (
    <nav
      className="mainSideBar"
      style={{ backgroundColor: bg2, boxShadow: boxShadow }}
    >
      {Object.keys(data).map((val, ind) => (
        <SidebarItem header={val} items={data[val]} keyy={ind} />
      ))}
    </nav>
  );
};

const SidebarItem = ({
  header = "Temp",
  items = ["item1", "item2", "item3"],
  keyy = 789,
}) => {
  const elementRef = useRef(null);
  const { theme, themes, eminence } = useContext(ThemeContext);
  const icon_filter = themes.themes[theme]["colors"]["filter"];
  const bg = themes.themes[theme]["colors"]["background"]["tertiary"];
  const bg2 = themes.themes[theme]["colors"]["surface"]["overlay"];
  const info = themes.themes[theme]["colors"]["primary"]["50"];
  const textColor = themes.themes[theme]["colors"]["text"]["inverse"];
  const textColorInv = themes.themes[theme]["colors"]["text"]["primary"];
  const boxShadow = eminence["shadows"]["levels"]["xs"];
  const fontSize = "1.2rem";

  const [state, setState] = useState(keyy == 0);
  const handleStateChange = () => {
    setState((prev) => !prev);
  };

  return (
    <div
      key={`elementaita${keyy}`}
      ref={elementRef}
      className="sideBarItem"
      style={{
        boxShadow: boxShadow,
        gap: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <p
        className="sideBarItemHeader"
        tabIndex={0}
        onClick={handleStateChange}
        style={{
          color: textColorInv,
          fontSize: fontSize,
          padding: "0.5rem 0.7rem",
          backgroundColor: bg2,
          boxShadow,
          width: "100%",
          // borderRadius: "0.51rem",
          justifySelf: "center",
          textAlign: "center",
          cursor: "pointer",
          zIndex: 1,
          fontWeight: 600,
        }}
      >
        {header.toString().toUpperCase()}
      </p>
      {state &&
        Object.keys(items).map((val, ind) => (
          <article
            key={`itemElement-${ind}`}
            className="itemElement"
            style={{
              color: textColorInv,
              fontSize: "1rem",
              padding: "0.8rem 1rem",
              backgroundColor: bg,
              cursor: "pointer",
              borderBottom: `1px solid ${bg2}`,
              width: "95%",
              justifySelf: "center",
              borderRadius: "15px 5px 15px 5px",
              fontWeight: 400,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              // zIndex: -1,
            }}
          >
            {items[val].icon && (
              <img
                src={items[val].icon}
                alt={`${val}-icon`}
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "10px",
                  marginRight: "15px",
                  filter: icon_filter,
                }}
              />
            )}
            <p>{val}</p>
          </article>
        ))}
    </div>
  );
};

export default Sidebar;
