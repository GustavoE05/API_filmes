import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search"; // Importe a página de pesquisa

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search} /> {/* Rota para a página de pesquisa */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
