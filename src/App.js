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
          <Route path="/tashkent" component={Toshkent} />
          <Route path="/xarezm" component={Xorazm} />
          <Route path="/andijan" component={Andijon} />
          <Route path="/jizzakh" component={Jizzax} />
          <Route path="/navaiy" component={Navoiy} />
          <Route path="/bukhara" component={Buxoro} />
          <Route path="/ferghana" component={Fargona} />
          <Route path="/samarkand" component={Samarqand} />
          <Route path="/namangan" component={Namangan} />
          <Route path="/qashqadaryo" component={Qashqadaryo} />
          <Route path="/sirdaryo" component={Sirdaryo} />
          <Route path="/surxandaryo" component={Surxandaryo} />
        </Switch>
      </Router>
      <footer className="footer">
        <span>&copy; Dasturchi: <a href="https://instagram.com/sardor_insane">Sardor</a></span>
      </footer>
    </>
  );
}

export default App;
