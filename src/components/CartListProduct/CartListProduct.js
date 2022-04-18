import { Component } from "react";
import { Link } from "react-router-dom";
import { handlePrice } from "../../helpers.js/productHelpers";
import StyledCartListProduct from "./CartListProductStyled";

export default class CartListProduct extends Component {
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

    const LinkToProduct = ({ children }) => (
      <Link to={`product/${p.id}`} className="cartItem__img">
        {children}
      </Link>
    );

    return (
      <StyledCartListProduct>
        <div className="cartItem">
          <div className="cartItem__left">
            {/* Brand & Name */}
            <LinkToProduct>
              <h2 className="carItem__brand">{p.brand}</h2>
            </LinkToProduct>

            <LinkToProduct>
              <h2 className="carItem__name">{p.name}</h2>
            </LinkToProduct>

            {/* Price */}
            <h3 className="carItem__price">
              {handlePrice(p.prices, activeCurrency).symbol}
              {handlePrice(p.prices, activeCurrency).amount}
            </h3>

            {/* Attributes */}
            <div className="product__sizes__btns">
              {p.attributes[0]?.name !== "Color" &&
                p.attributes[0]?.items.map((s) => (
                  <div key={s.id}>
                    <button value={s.value}>{s.value}</button>
                  </div>
                ))}

              {p.attributes[0]?.name === "Color" &&
                p.attributes[1]?.items.map((s) => (
                  <div key={s.id}>
                    <button value={s.value}>{s.value}</button>
                  </div>
                ))}
            </div>
          </div>

          <div className="cartItem__right">
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

            <LinkToProduct className="cartItem__img">
              <img src={p.gallery[0]} alt="Product Image" />
            </LinkToProduct>
          </div>
        </div>
      </StyledCartListProduct>
    );
  }
}
