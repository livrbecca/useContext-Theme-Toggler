import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./index";

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  // console.log("theme", theme);
  return (
    <div style={{ background: theme.background }} className="App">
      <h1 style={{ color: theme.foreground }}>Hello. Nice to meet you.</h1>
      <button onClick={toggleTheme}>Toggle me</button>
    </div>
  );
}

export default App;
