import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import GandhijiProfile from "./components/Home";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const hasDisplayedPopup = localStorage.getItem("hasDisplayedPopup");

    if (!hasDisplayedPopup) {
      setShowPopup(true);
      localStorage.setItem("hasDisplayedPopup", "true");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <p></p>
      <GandhijiProfile />
      {showPopup && <Popup />}
    </div>
  );
}

export default App;
