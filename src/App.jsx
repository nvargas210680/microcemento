import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Suplier from "./component/Suplier/Suplier";
import Proyectos from "./component/Proyectos/Proyectos";
import Value from "./component/Value/Value";
import Contact from "./component/Contact/Contact";
import GetStarted from "./component/GetStarted/GetStarted";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Suplier />
      <Proyectos />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
