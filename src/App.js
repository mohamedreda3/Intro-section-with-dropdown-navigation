import react from "react";
import Header from "./layouts/header/header";
import Home from "./layouts/home/home";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
