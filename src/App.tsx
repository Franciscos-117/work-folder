import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Router from './routes/Router';
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";


function App() {


  return (
    // <p>hopa</p>
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
