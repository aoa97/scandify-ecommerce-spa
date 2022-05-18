import { Component } from "react";
import { Link } from "react-router-dom";
import { calcPrice } from "../../helpers/productHelpers";
import { Container, Left, Right } from "./CartListProduct.styles";
import { IconSlideLeft, IconSlideRight } from "../svg/IconSVG";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import Counter from "../Counter/Counter";
import { connect } from "react-redux";
import { updateSelAttributes } from "../../redux/actions/cartActions";

class CartListProduct extends Component {
  state = {
    imgIndex: 0,
    selAttributes: this.props.product?.selAttributes,
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
    const { updateSelAttributes, product: { cartId } } = this.props;
    const { selAttributes } = this.state;

    if (prevState.selAttributes !== selAttributes) {
      updateSelAttributes(cartId, selAttributes);
    }
  }

  render() {
    const { product: p, activeCurrency, mini } = this.props;
    const { imgIndex, selAttributes } = this.state;
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
          <Counter mini={mini} cartId={p.cartId} qty={p.qty} />

          <LinkToProduct className="imgWrapper">
            <div className="preview">
              <img src={p.gallery[imgIndex]} alt="Product Image" />
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
  };
};

export default connect(null, mapDispatchToProps)(CartListProduct);
