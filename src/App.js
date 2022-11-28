import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { useTelegram } from "./hooks/UseTelegram";

function App() {
  const { tg, onToggleButton } = useTelegram();
  React.useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
