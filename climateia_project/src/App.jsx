import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Context from "./components/Context";
import DefaultPrediction from "./components/DefaultPrediction";
import ModifiedPrediction from "./components/ModifiedPrediction";
import AdviceNTips from "./components/AdviceNTips";
import Footer from "./components/Footer";
import Btn_down from "./components/Btn_down";
import Form_DefaultPrediction from "./components/Form_DefaultPrediction"
import Map_DefaultPrediction from "./components/Map_DefaultPrediction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Form_DefaultPrediction/>
      <Map_DefaultPrediction/>
        <Hero />
        <Context />
        <DefaultPrediction />
        <ModifiedPrediction />
        <AdviceNTips />
        <Footer />
        <Btn_down/>
      </div>
    </>
  );
}

export default App;
