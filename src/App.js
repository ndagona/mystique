import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/Auth";
import Index from "./components/Index";
import React from "react";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <React.Fragment
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Index />
        </React.Fragment>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
