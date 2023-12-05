import 'boxicons';
import './App.css'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
        <Header />

        <main className="main">
            <Home />
            {/* <About />
            <Skills />
            <Services /> */}
            <Qualification />
            {/* <Contact /> */}
        </main>

        <Footer />
    </div>
  )
}

export default App
