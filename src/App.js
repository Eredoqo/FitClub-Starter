import "./App.css";
import Footter from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Hero/Programs/Programs";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Reasons from "./components/Reasons/Reasons.jsx";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footter />
    </div>
  );
}

export default App;
