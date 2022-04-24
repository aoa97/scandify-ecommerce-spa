import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Navbar } from "./components";
import store from "./redux/store";
import theme from "./styles/theme";
import Global from "./styles/Global.styled";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <Router>
            <Navbar />
            <main>
              <Switch>
                <Route path="/product/:id" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/" component={Home} />
              </Switch>
            </main>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
