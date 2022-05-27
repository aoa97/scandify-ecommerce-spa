import parse from "html-react-parser";
import { Component } from "react";
import { calcPrice } from "../../helpers/productHelpers";
import { BtnPrimary } from "../../styles/Components.styled";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
import Counter from "../Counter/Counter";
import {
  Container,
  Description,
  Gallery,
  Left,
  Preview,
  Price,
  Right,
  Title,
} from "./ProductData.styles";
import { IconSlideLeft, IconSlideRight } from "../svg/IconSVG";

export default class ProductData extends Component {
  state = {
    imgIndex: 0,
    qty: 1,
    selAttributes: {},
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

  render() {
    const { product: p, activeCurrency, addToCart } = this.props;
    const { imgIndex, qty, selAttributes } = this.state;
    const price = calcPrice(p.prices, activeCurrency);

    return (
      <Container>
        <Left>
          <Gallery>
            {p.gallery.length > 1 &&
              p.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Product"
                  onClick={() => this.setState({ imgIndex: i })}
                />
              ))}
          </Gallery>

          <Preview>
            <img src={p.gallery[imgIndex]} alt="Product" />

            {/* Slider In Smaller Screens */}
            {p.gallery.length > 1 && (
              <div className="slider">
                <IconSlideLeft onClick={this.handlePreviousImage} />
                <IconSlideRight onClick={this.handleNextImage} />
              </div>
            )}
          </Preview>
        </Left>

        <Right>
          <Title>
            <h2>{p?.brand}</h2>
            <p>{p?.name}</p>
          </Title>

          <ProductAttributes
            noStock={!p.inStock}
            product={p}
            selAttributes={selAttributes}
            setSelAttributes={(selAttributes) => this.setState({ selAttributes })} 
          />

          <div className="price-counter">
            <Price>
              <h4>Price:</h4>

              {activeCurrency && <span>{price}</span>}
            </Price>

            {p.inStock && (
              <Counter
                create
                className="row"
                cartId={p.cartId}
                qty={qty}
                setQty={(qty) => this.setState({ qty })}
              />
            )}
          </div>

          <BtnPrimary
            onClick={() => addToCart(p, selAttributes, qty)}
            disabled={Object.keys(selAttributes).length !== p.attributes.length} // All attrs should be selected
          >
            {p.inStock ? "Add to Cart" : "Out of Stock"}
          </BtnPrimary>

          <Description>{p.description && parse(p.description)}</Description>
        </Right>
      </Container>
    );
  }
}
