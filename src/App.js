import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="container">
      <Header/>
      <Navbar/>
        <section className="app-content">
            <Home/>
        </section>
        </div>
    </div>
  );
}

export default App;
