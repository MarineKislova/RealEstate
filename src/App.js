// import Wrapper from "./components/wrapper";
import HeroSection from "./components/hero-section/hero-section";
import { Header } from "./components/hero-section/hero-section";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <Header />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default App;
