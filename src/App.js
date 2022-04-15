import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, RouteProps } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./redux/store";
import theme from "./styles/theme";
import Global from "./components/styled/Global.styled";
import { Navbar } from "./components";
import { HomePage, ProductPage, CartPage } from "./pages";

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
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </main>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
