import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import GandhijiProfile from "./components/Home";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Show the popup when the component is mounted
    setShowPopup(true);

    // Set a flag in local storage to indicate that the popup has been displayed
    localStorage.setItem("hasDisplayedPopup", "true");
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
