import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Activities from "./sections/Activities";
import Events from "./sections/Events";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";


function App() {
  return (
    <div className="min-h-screen bg-space-dark font-sans selection:bg-blue-500/30">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <About />
        <Activities />
        <Events />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;