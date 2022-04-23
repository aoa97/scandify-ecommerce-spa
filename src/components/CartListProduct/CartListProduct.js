import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { calcPrice } from "../../helpers/productHelpers";
import { updateSelAttributes } from "./../../redux/actions/cartActions";
import StyledCartListProduct from "./CartListProductStyled";

class CartListProduct extends Component {
  state = {
    qty: this.props.product.qty,
    selAttributes: this.props.product.selAttributes,
  };

  handleAttributes(name, value) {
    this.setState({
      selAttributes: { ...this.state.selAttributes, [name]: value },
    });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.qty !== this.state.qty) {
      this.props.updateQty({
        id: this.props.product.id,
        qty: this.state.qty,
      });
    }

    if (prevState.selAttributes !== this.state.selAttributes) {
      this.props.updateSelAttributes({
        id2: this.props.product.id,
        selAttributes: this.state.selAttributes,
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
            <h3 className="carItem__price">{calcPrice(p.prices, activeCurrency)}</h3>

            {/* Attributes */}
            {p.attributes?.map((a, i) => (
              <div key={i} className="product__sizes">
                <h4>{a.name}:</h4>

                <div className="product__sizes__btns">
                  {a.name === "Color"
                    ? a.items.map((x, j) => (
                        <button
                          key={j}
                          value={x.value}
                          style={{ background: x.value }}
                          onClick={() => this.handleAttributes(a.name, x.value)}
                          className={
                            p.selAttributes[a.name] === x.value
                              ? "color active-color"
                              : "color"
                          }
                        />
                      ))
                    : a.items.map((x, j) => (
                        <button
                          key={j}
                          value={x.value}
                          onClick={() => this.handleAttributes(a.name, x.value)}
                          className={
                            p.selAttributes[a.name] === x.value ? "active" : ""
                          }
                        >
                          {x.value}
                        </button>
                      ))}
                </div>
              </div>
            ))}
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelAttributes: (item) => dispatch(updateSelAttributes(item)),
  };
};

export default connect(null, mapDispatchToProps)(CartListProduct);
