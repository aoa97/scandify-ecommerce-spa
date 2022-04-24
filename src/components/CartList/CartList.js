import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconEmptyCart } from "../svg/IconSVG";
import { BtnPrimary } from "../../styles/Components.styled";
import { CartWrapper, EmptyCartWrapper, Summary } from "./CartList.styles";
import { calcTotalPrice } from "../../helpers/productHelpers";
import CartListProduct from "../CartListProduct/CartListProduct";

class CartList extends Component {
  render() {
    const { activeCurrency, cart } = this.props;
    const { totalPrice, totalQty } = calcTotalPrice(cart, activeCurrency);

    return (
      <>
        {/* Empty Cart Case */}
        {cart.length === 0 && (
          <EmptyCartWrapper>
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
            <h1>Cart</h1>

            {cart.map((p, i) => (
              <CartListProduct
                key={i}
                product={p}
                activeCurrency={activeCurrency}
                updateQty={this.props.updateQty}
              />
            ))}
          </CartWrapper>
        )}

        {/* Summary */}
        {cart.length > 0 && (
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
