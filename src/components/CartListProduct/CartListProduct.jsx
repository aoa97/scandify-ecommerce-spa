import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { calcPrice } from "../../helpers/productHelpers";
import { updateSelAttributes } from "../../redux/actions/cartActions";
import { Container, Left, Right } from "./CartListProduct.styles";
import { IconSlideLeft, IconSlideRight } from "../svg/IconSVG";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import Counter from "../Counter/Counter";

class CartListProduct extends Component {
  state = {
    selAttributes: this.props.product.selAttributes,
    imgIndex: 0,
  };

  handleAttributes(name, value) {
    this.setState({
      selAttributes: { ...this.state.selAttributes, [name]: value },
    });
  }

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

  render() {
    const { product: p, activeCurrency, mini } = this.props;
    const { imgIndex } = this.state;
    const price = calcPrice(p.prices, activeCurrency, p.qty);

    const LinkToProduct = ({ children, ...otherProps }) => (
      <Link to={`product/${p.id}`} {...otherProps}>
        {children}
      </Link>
    );

    return (
      <Container mini={mini}>
        <Left mini={mini}>
          <LinkToProduct>
            <h2 className="brand">{p.brand}</h2>
            <h2 className="name">{p.name}</h2>
          </LinkToProduct>

          <h3 className="price">{price}</h3>

          <ProductAttributes mini={mini} attributes={p.attributes} />
        </Left>

        <Right mini={mini}>
          <Counter mini={mini} id={p.id} qty={p.qty} />

          <LinkToProduct className="imgWrapper">
            <img src={p.gallery[imgIndex]} alt="Product Image" />

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
    updateSelAttributes: (item) => dispatch(updateSelAttributes(item)),
  };
};

export default connect(null, mapDispatchToProps)(CartListProduct);
