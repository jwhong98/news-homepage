import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="App">
      {isOpen && <MobileNav onToggle={onToggle} />}
      <Header onToggle={onToggle} />
      <Main />
    </div>
  );
}

export default App;
