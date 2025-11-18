import "./Login.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { BlinkBlur } from "react-loading-indicators";

const Login = () => {
  const { theme, themes, eminence } = useContext(ThemeContext);
  const PIN = 3345;
  const bg = themes.themes[theme]["colors"]["background"]["primary"];
  const bg2 = themes.themes[theme]["colors"]["surface"]["primary"];
  const info = themes.themes[theme]["colors"]["primary"]["50"];
  const textColor = themes.themes[theme]["colors"]["text"]["inverse"];
  const textColorInv = themes.themes[theme]["colors"]["text"]["primary"];
  const boxShadow = eminence["shadows"]["levels"]["xs"];
  const fontSize = "1.7rem";
  const [textString, setTextString] = useState("");
  const theString = "Access Code";
  const ALLOWED_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

  const [pincode, setPincode] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const [indice, setIndice] = useState(0);
  const [currentVal, setCurrentValue] = useState();
  const [login, setLogin] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const userPin = parseInt(
      Object.keys(pincode)
        .map((key) => pincode[key])
        .join("")
    );
    if (userPin !== PIN) {
      resetLogin();
      setLogin(false);
      return;
    }
    const seq = [
      `**************** checking access code ********`,
      `**************** valid code ******************`,
      `**************** password accepted ***********`,
      `**************** loading desktop *************`,
      `**************** redirecting *****************`,
    ];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTextString(seq[currentIndex]);
      currentIndex++;

      if (currentIndex >= seq.length) {
        clearInterval(intervalId);
        navigate("/");
      }
    }, 1200 + currentIndex * 50);
    setLoading(true);
  };

  const resetLogin = () => {
    setIndice(0);
    setPincode({ 0: "", 1: "", 2: "", 3: "" });
    setCurrentValue(null);
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    const newKey = key.toString().toUpperCase();
    if (indice > 4) return;
    if (ALLOWED_CHARS.indexOf(newKey) === -1) return;
    setCurrentValue(newKey);
    setIndice((prev) => prev + 1);
  };

  useEffect(() => {
    handleLogin();
  }, [login]);

  useEffect(() => {
    if (currentVal !== null) {
      if (indice < 5) {
        const key = indice - 1;
        setPincode({ ...pincode, [key]: currentVal });
      }
    }

    if (indice === 4) {
      setLogin(true);
    }
  }, [indice]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const codeStyle = {
    color: textColor,
    backgroundColor: textColorInv,
    fontSize: fontSize,
    boxShadow,
  };

  return (
    <main
      className="loginBod"
      style={{
        backgroundColor: bg,
      }}
    >
      <article
        style={{
          color: textColorInv,
          fontSize: fontSize,
          padding: "10px",
        }}
      >
        {theString}
      </article>
      {!loading ? (
        <section
          className="pinSectionMain"
          style={{
            backgroundColor: bg2,
            borderColor: info,
          }}
        >
          <article className="pinSection" style={{ ...codeStyle }}>
            {pincode["0"]}
          </article>
          <article className="pinSection" style={{ ...codeStyle }}>
            {pincode["1"]}
          </article>
          <article className="pinSection" style={{ ...codeStyle }}>
            {pincode["2"]}
          </article>
          <article className="pinSection" style={{ ...codeStyle }}>
            {pincode["3"]}
          </article>
        </section>
      ) : (
        <>
          <BlinkBlur color="#32cd32" size="medium" text="" textColor="" />
          <article
            style={{
              color: "aqua",
              fontSize: "1.1rem",
              padding: "10px",
              paddingTop: "50px",
            }}
          >
            {textString}
          </article>
        </>
      )}
    </main>
  );
};

export default Login;
