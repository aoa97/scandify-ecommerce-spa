import { Component } from "react";
import { Helmet } from "react-helmet";
import { CartList } from "../../components";
import CartPageStyled from "./CartPageStyled";

export default class CartPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Shopping Cart</title>
        </Helmet>

        <CartPageStyled>
          <CartList />
        </CartPageStyled>
      </>
    );
  }
}
