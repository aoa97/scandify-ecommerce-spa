import { Component } from "react";
import { connect } from "react-redux";
import { animated, Spring } from "react-spring";
import { IconCartW } from "../svg/IconSVG";
import { addToCart } from "../../redux/actions/cartActions";
import { calcPrice } from "./../../helpers/productHelpers";
import {
  List,
  Item,
  ItemImg,
  ItemName,
  ItemBrand,
  ItemCart,
  ItemPrice,
} from "./ProductList.styles";

class ProductList extends Component {
  handleAddToCart(e, p) {
    e.stopPropagation();
    this.props.addToCart(p);
  }

  render() {
    const { nav, activeCurrency, products } = this.props;

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(styles) => (
          <animated.div style={styles}>
            <List>
              {products.map((p, i) => (
                <Item key={i} noStock={!p.inStock} onClick={() => nav(`/product/${p.id}`)}>
                  <ItemImg>
                    <img src={p.gallery[0]} alt="Product Img" />

                    {/* Cart Icon (Only on hover) => Placed here to be relative to img */}
                    {p.inStock && (
                      <ItemCart onClick={(e) => this.handleAddToCart(e, p)}>
                        <IconCartW />
                      </ItemCart>
                    )}
                  </ItemImg>

                  {/*  Name */}
                  <ItemBrand>{p.brand}</ItemBrand>

                  {/*  Name */}
                  <ItemName>{p.name}</ItemName>

                  {/*  Price */}
                  {activeCurrency && (
                    <ItemPrice>{calcPrice(p.prices, activeCurrency)}</ItemPrice>
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
    addToCart: (p) => dispatch(addToCart(p)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
