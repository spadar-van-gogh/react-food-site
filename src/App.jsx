import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
