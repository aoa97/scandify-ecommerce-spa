import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { calcPrice } from "../../helpers/productHelpers";
import { Container, Left, Right } from "./CartListProduct.styles";
import { IconSlideLeft, IconSlideRight } from "../svg/IconSVG";
import { updateSelAttributes, updateQty } from "../../redux/actions/cartActions";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import Counter from "../Counter/Counter";

class CartListProduct extends Component {
  state = {
    imgIndex: 0,
    selAttributes: this.props.product?.selAttributes,
    qty: this.props.product?.qty,
  };

  handlePreviousImage = (e) => {
    e.preventDefault();
    const { imgIndex } = this.state;
    const { gallery } = this.props.product;

    this.setState({
      imgIndex: imgIndex === 0 ? gallery.length - 1 : imgIndex - 1,
    });
  };

  handleNextImage = (e) => {
    e.preventDefault();
    const { imgIndex } = this.state;
    const { gallery } = this.props.product;

    this.setState({
      imgIndex: imgIndex === gallery.length - 1 ? 0 : imgIndex + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { updateSelAttributes, updateQty, product: { cartId }} = this.props;
    const { selAttributes, qty } = this.state;

    if (prevState.selAttributes !== selAttributes) {
      updateSelAttributes(cartId, selAttributes);
    }

    if (prevState.qty !== qty) {
      updateQty(cartId, qty);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.product.cartId !== this.props.product.cartId) {
      this.setState({ qty: nextProps.product.qty });
    }
  }

  render() {
    const { product: p, activeCurrency, mini } = this.props;
    const { imgIndex, selAttributes, qty } = this.state;
    const price = calcPrice(p.prices, activeCurrency);

    const LinkToProduct = ({ children, ...otherProps }) => {
      return (
        <Link to={`product/${p.id}`} {...otherProps}>
          {children}
        </Link>
      );
    };

    return (
      <Container mini={mini}>
        <Left mini={mini}>
          <LinkToProduct>
            <h2 className="brand">{p.brand}</h2>
            <h2 className="name">{p.name}</h2>
          </LinkToProduct>

          <h3 className="price">{price}</h3>

          <ProductAttributes
            product={p}
            mini={mini}
            selAttributes={selAttributes}
            setSelAttributes={(selAttributes) =>
              this.setState({ selAttributes })
            }
          />
        </Left>

        <Right mini={mini}>
          <Counter
            mini={mini}
            qty={qty}
            setQty={(qty) => this.setState({ qty })}
          />

          <LinkToProduct className="imgWrapper">
            <div className="preview">
              <img src={p.gallery[imgIndex]} alt="Product" />
            </div>

            {p.gallery.length > 1 && (
              <div className="gallery">
                <IconSlideLeft onClick={this.handlePreviousImage} />
                <IconSlideRight onClick={this.handleNextImage} />
              </div>
            )}
          </LinkToProduct>
        </Right>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelAttributes: (cartId, selAttributes) => {
      return dispatch(updateSelAttributes(cartId, selAttributes));
    },
    updateQty: (cartId, qty) => dispatch(updateQty(cartId, qty)),
  };
};

export default connect(null, mapDispatchToProps)(CartListProduct);
