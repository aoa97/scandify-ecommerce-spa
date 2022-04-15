import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { IconCartW } from "../../components/svg/IconSVG";
import { addToCart } from "../../redux/actions/cartActions";
import StyledProductList from "./ProductListStyled";

class ProductList extends Component {
  handleAddToCart(e, id) {
    e.preventDefault();
    this.props.addToCart(id);
  }

  // Selected currency with price
  handlePrice(prices) {
    const { activeCurrency } = this.props;
    return (
      prices.find((p) => p.currency.label === activeCurrency.label) ?? prices[0]
    );
  }

  render() {
    return (
      <StyledProductList>
        {this.props.products.map((p, i) => (
          <Link
            key={i}
            to={`/product/${p.id}`}
            className={`product-${p.inStock}`}
          >
            <div className={`productItem ${p.inStock}`}>
              {/* Product Image */}
              <div className="productItem__img">
                <img src={p.gallery[0]} />

                {/* Cart Icon (Only on hover) */}
                <div
                  className="productItem__cart"
                  onClick={(e) => this.handleAddToCart(e, p.id)}
                >
                  <IconCartW />
                </div>
              </div>

              {/* Product Name */}
              <span className="productItem__name">{p.name}</span>

              {/* Product Price */}
              {this.props.activeCurrency && (
                <span className="productItem__price">
                  {this.handlePrice(p.prices).currency.symbol}
                  {this.handlePrice(p.prices).amount}
                </span>
              )}
            </div>
          </Link>
        ))}
      </StyledProductList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCurrency: state.currencyData.activeCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
