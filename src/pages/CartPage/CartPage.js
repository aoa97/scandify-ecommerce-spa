import { Component } from "react";
import { Helmet } from "react-helmet";
import { CartList } from "../../components";
import CartPageStyled from "./CartPageStyled";
import { animated, Spring } from "react-spring";

export default class CartPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Shopping Cart</title>
        </Helmet>

        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(styles) => (
            <animated.div style={styles}>
              <CartPageStyled>
                <CartList />
              </CartPageStyled>
            </animated.div>
          )}
        </Spring>
      </>
    );
  }
}
