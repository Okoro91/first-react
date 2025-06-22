import "./App.css";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App