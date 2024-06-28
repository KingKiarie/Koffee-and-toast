import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BentoView from "./components/BentoView";
import TextCarousel from "./components/Textcarousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <TextCarousel />   
      <BentoView />
    </>
  );
}

export default App;
