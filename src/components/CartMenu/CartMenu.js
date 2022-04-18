import Lottie from "lottie-react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { handleTotalPrice } from "../../helpers.js/productHelpers";
import Dropdown from "../Dropdown/Dropdown";
import StyledCartMenu from "./CartMenuStyled";
import animation from "./animation.json";
import CartMenuProduct from "../CartMenuProduct/CartMenuProduct";

export default class CartMenu extends Component {
  render() {
    const { activeCurrency, cart } = this.props;

    return (
      <Dropdown closeMenu={this.props.closeMenu}>
        <StyledCartMenu>
          {/* Header */}
          <h2 className="cartMenu__header">
            My Bag, <span>{cart.length} items</span>
          </h2>

          {/* Empty Cart Case */}
          {cart.length === 0 && (
            <div className="empty-cart">
              <Lottie animationData={animation} />
            </div>
          )}

          {/* Cart Products Rendering */}
          {cart.length !== 0 && (
            <>
              {/* Product List */}
              <div className="cartMenu__products">
                {cart.map((p, i) => (
                  <CartMenuProduct
                    key={i}
                    product={p}
                    activeCurrency={activeCurrency}
                    updateQty={this.props.updateQty}
                    closeMenu={this.props.closeMenu}
                  />
                ))}
              </div>

              {/* Total Price*/}
              <div className="cartMenu__total">
                <h4>Total</h4>
                <h5>{handleTotalPrice(cart, activeCurrency)}</h5>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="cartMenu__buttons">
            <Link
              to="/cart"
              className="btn view-btn"
              onClick={() => this.props.closeMenu()}
            >
              View Bag
            </Link>
            <div className="btn check-btn">Checkout</div>
          </div>
        </StyledCartMenu>
      </Dropdown>
    );
  }
}
