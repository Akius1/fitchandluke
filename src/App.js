import BodyLayout from "./Components/Body";
import Footer from "./Components/Footer";
import NavBar from "./Components/Header";
import Home from "./Pages";

function App() {
  return (
    <div className="App">
      <Home>
        <NavBar/>
        <BodyLayout/>
        <Footer/>
      </Home>
    </div>
  );
}

export default App;
