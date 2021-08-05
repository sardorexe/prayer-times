import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Toshkent from "./Pages/Toshkent";
import Xorazm from "./Pages/Xorazm";
import Andijon from "./Pages/Andijon";
import Fargona from "./Pages/Fargona";
import Navoiy from "./Pages/Navoiy";
import Jizzax from "./Pages/Jizzax";
import Buxoro from "./Pages/Buxoro";
import Sirdaryo from "./Pages/Sirdaryo";
import Namangan from "./Pages/Namangan";
import Qashqadaryo from "./Pages/Qashqadaryo";
import Surxandaryo from "./Pages/Surxandaryo";
import Samarqand from "./Pages/Samarqand";
import NotFound from "./components/NotFound";
import "./styles/App.css";
import "./styles/Responsive.css";

function App() {
  return (
    <>
      <div className="start">
        <h1 className="title">NAMOZ VAQTLARI</h1>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/tashkent" component={Toshkent} />
          <Route exact path="/andijan" component={Andijon} />
          <Route exact path="/xarezm" component={Xorazm} />
          <Route exact path="/navaiy" component={Navoiy} />
          <Route exact path="/jizzakh" component={Jizzax} />
          <Route exact path="/ferghana" component={Fargona} />
          <Route exact path="/bukhara" component={Buxoro} />
          <Route exact path="/namangan" component={Namangan} />
          <Route exact path="/samarkand" component={Samarqand} />
          <Route exact path="/sirdaryo" component={Sirdaryo} />
          <Route exact path="/qashqadaryo" component={Qashqadaryo} />
          <Route exact path="/surxandaryo" component={Surxandaryo} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <footer className="footer">
        <span>&copy; Dasturchi: <a href="https://instagram.com/s_aminoff">Sardor</a></span>
      </footer>
    </>
  );
}

export default App;
