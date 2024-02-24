import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar/navbar";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/home";
import Notfound from "./components/page404/pageNotFound";
import AboutUs from "./components/AboutUs/aboutUs"
import Login from "./components/LoginPage/login"
import Signup from "./components/SignUp/signup";
import Dashboard from "./components/Dashboard/dashBoard";

function App() {
  return (

    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/">

            <Navbar />
            <Home />

          </Route>

          <Route exact path="/AboutUs">

            <Navbar />
            <AboutUs />

          </Route>

          <Route exact path="/Contact">

            <Navbar />
            <Contact />

          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path ="/Signup">
            <Signup/>
          </Route>

          <Route exact path ="/Dashboard">
            <Dashboard/>
          </Route>

          <Route component={Notfound} />

        </Switch>
      </div>

    </Router>
  );
}

export default App;
