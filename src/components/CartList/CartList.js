import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IconEmptyCart } from "../svg/IconSVG";
import { updateQty } from "../../redux/actions/cartActions";
import CartListProduct from "../CartListProduct/CartListProduct";
import StyledProductList from "./CartListStyled";

class CartList extends Component {
  render() {
    const { activeCurrency, cart } = this.props;

    return (
      <StyledProductList>
        {/* Empty Cart Case */}
        {cart.length === 0 && (
          <div className="center">
            <div className="empty-cart">
              <IconEmptyCart />

              <h2>Your Scandify Cart Bag is Empty</h2>
              <p>Browse our categories and discover our best details!</p>

              <Link to="/" className="continue-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}

        {/* Otherwise */}
        {cart.length > 0 && (
          <>
            <h1>Cart</h1>

            <div className="cart-list">
              {cart.map((p, i) => (
                <CartListProduct
                  key={i}
                  product={p}
                  activeCurrency={activeCurrency}
                  updateQty={this.props.updateQty}
                />
              ))}
            </div>
          </>
        )}
      </StyledProductList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    activeCurrency: state.currencyData.activeCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQty: (id) => dispatch(updateQty(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
