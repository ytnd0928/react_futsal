import { BrowserRouter } from "react-router-dom";

import {  Route, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { News } from "./components/pages/News";
import { Header } from "./components/header/Header"



const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Route exact path="/">
          <Home />
          </Route >
          <Route path="/news">
            <News />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default  App;
  