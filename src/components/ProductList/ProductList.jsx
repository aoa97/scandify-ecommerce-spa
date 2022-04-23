import { Component } from "react";
import { connect } from "react-redux";
import { animated, Spring } from "react-spring";
import { IconCartW } from "../svg/IconSVG";
import { addToCart } from "../../redux/actions/cartActions";
import {
  List,
  Item,
  ItemImg,
  ItemName,
  ItemCart,
  ItemPrice,
} from "./ProductList.styles";

class ProductList extends Component {
  handleAddToCart(e, id) {
    e.preventDefault();
    this.props.addToCart(id);
  }

  renderPrice(prices) {
    const { activeCurrency } = this.props;
    const price =
      prices.find((p) => p.currency.label === activeCurrency.label) ??
      prices[0];
    return `${price.currency.symbol} ${price.amount}`;
  }

  render() {
    const { nav, activeCurrency, products } = this.props;

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(styles) => (
          <animated.div style={styles}>
            <List>
              {products.map((p, i) => (
                <Item
                  key={i}
                  noStock={!p.inStock}
                  onClick={() => nav(`/product/${p.id}`)}
                >
                  <ItemImg>
                    <img src={p.gallery[0]} />

                    {/* Cart Icon (Only on hover) => Placed here to be relative to img */}
                    <ItemCart onClick={(e) => this.handleAddToCart(e, p.id)}>
                      <IconCartW />
                    </ItemCart>
                  </ItemImg>

                  {/*  Name */}
                  <ItemName>{p.name}</ItemName>

                  {/*  Price */}
                  {activeCurrency && (
                    <ItemPrice>{this.renderPrice(p.prices)}</ItemPrice>
                  )}
                </Item>
              ))}
            </List>
          </animated.div>
        )}
      </Spring>
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
