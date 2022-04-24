import styled from "styled-components";
import { Component } from "react";
import { animated, Spring } from "react-spring";
import { Helmet } from "react-helmet";
import { CartList } from "../components";

export default class CartPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Shopping Cart</title>
        </Helmet>

        <Container>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(styles) => (
              <animated.div style={styles}>
                <CartList />
              </animated.div>
            )}
          </Spring>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  padding: 8rem 0;
`;
