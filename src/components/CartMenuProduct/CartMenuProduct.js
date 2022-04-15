import { Component } from "react";
import { Link } from "react-router-dom";
import { handlePrice } from "../../helpers.js/productHelpers";
import StyledCartMenuProduct from "./CartMenuProductStyled";

export default class CartMenuProduct extends Component {
  state = {
    qty: this.props.product.qty,
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.qty !== this.state.qty) {
      this.props.updateQty({
        id: this.props.product.id,
        qty: this.state.qty,
      });
    }
  }

  render() {
    const { product: p, activeCurrency } = this.props;

    return (
      <StyledCartMenuProduct>
        <div className="cartItem">
          {/* Left Side */}
          <div className="cartItem__left">
            {/* Brand & Name */}
            <h2 className="carItem__brand">{p.brand}</h2>
            <h3 className="carItem__name">{p.name}</h3>

            {/* Price */}
            <h3 className="carItem__price">
              {handlePrice(p.prices, activeCurrency).symbol}
              {handlePrice(p.prices, activeCurrency).amount}
            </h3>

            {/* Attributes */}
            <div className="product__sizes__btns">
              {/* Attributes */}
              {p.attributes[0]?.name !== "Color" &&
                p.attributes[0]?.items.map((s) => (
                  <div key={s.id}>
                    <button value={s.value}>{s.value}</button>
                  </div>
                ))}
              {/* Color Attributes */}
              {p.attributes[0]?.name === "Color" &&
                p.attributes[1]?.items.map((s) => (
                  <div key={s.id}>
                    <button value={s.value}>{s.value}</button>
                  </div>
                ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="cartItem__right">
            {/* Qty Counter */}
            <div className="counter">
              <div
                className="counter__operator"
                onClick={() => this.setState({ qty: this.state.qty + 1 })}
              >
                <span>+</span>
              </div>

              <div className="counter__value">{p.qty}</div>

              <div
                className="counter__operator"
                onClick={() => this.setState({ qty: this.state.qty - 1 })}
              >
                <span>-</span>
              </div>
            </div>

            {/* Product Image */}
            <Link to={`product/${p.id}`} className="cartItem__img">
              <img src={p.gallery[0]} alt="Product Image" />
            </Link>
          </div>
        </div>
      </StyledCartMenuProduct>
    );
  }
}
