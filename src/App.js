import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Navbar />
          <Banner />

          <div id="exceptFooter">
          <Pages />
          </div>

        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
