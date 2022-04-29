import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconEmptyCart } from "../svg/IconSVG";
import { BtnPrimary } from "../../styles/Components.styled";
import {
  CartWrapper,
  EmptyCartWrapper,
  List,
  Summary,
  MiniSummary,
  MiniButtons,
} from "./CartList.styles";
import { calcTotalPrice } from "../../helpers/productHelpers";
import CartListProduct from "../CartListProduct/CartListProduct";

class CartList extends Component {
  render() {
    const { activeCurrency, cart, mini, closeMini, updateQty } = this.props;
    const { totalPrice, totalQty } = calcTotalPrice(cart, activeCurrency);

    return (
      <>
        {/* Empty Cart Case */}
        {cart.length === 0 && (
          <EmptyCartWrapper mini={mini} onClick={() => closeMini()}>
            <IconEmptyCart />

            <h2>Your Scandify Cart Bag is Empty</h2>
            <p>Browse our categories and discover our best details!</p>

            <Link to="/" className="continue-btn">
              Continue Shopping
            </Link>
          </EmptyCartWrapper>
        )}

        {/* Otherwise */}
        {cart.length > 0 && (
          <CartWrapper>
            {/* Header */}
            {mini ? (
              <h2>
                My Bag, <span>{cart.length} items</span>
              </h2>
            ) : (
              <h1>Cart</h1>
            )}

            {/* Cart Products List */}
            <List mini={mini}>
              {cart.map((p, i) => (
                <CartListProduct
                  mini={mini}
                  key={i}
                  product={p}
                  activeCurrency={activeCurrency}
                  updateQty={updateQty}
                />
              ))}
            </List>
          </CartWrapper>
        )}

        {/* Summary */}
        {cart.length > 0 && (
          <>
            {mini ? (
              <MiniSummary>
                <h4>Total</h4>
                <h5>{totalPrice}</h5>
              </MiniSummary>
            ) : (
              <Summary>
                <div>
                  Tax: <span>$15.00</span>
                </div>

                <div>
                  Qty: <span>{totalQty}</span>
                </div>

                <div className="total">
                  Total: <span>{totalPrice}</span>
                </div>

                <BtnPrimary>Order</BtnPrimary>
              </Summary>
            )}
          </>
        )}

        {/* Mini Cart Buttons */}
        {cart.length > 0 && mini && (
          <MiniButtons>
            <Link onClick={() => closeMini()} to="/cart" className="btn bag">
              View Bag
            </Link>

            <div className="btn checkout">Checkout</div>
          </MiniButtons>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    activeCurrency: state.currencyData.activeCurrency,
  };
};

export default connect(mapStateToProps)(CartList);
