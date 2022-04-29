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
    const price = calcPrice(p.prices, activeCurrency, qty);

    const createDesc = (x) => {
      return { __html: x };
    };

    return (
      <Container>
        <Left>
          <Gallery>
            {p.gallery.length > 1 &&
              p.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Product Image"
                  className={p.gallery[imgIndex] === img ? "active" : ""}
                  onClick={() => this.setState({ imgIndex: i })}
                />
              ))}
          </Gallery>

          <Preview>
            <img src={p.gallery[imgIndex]} alt="Product Image" />

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
            product={p}
            getAttributes={(selAttributes) => this.setState({ selAttributes })} // CB to get attrs back from child
          />

          <div className="price-counter">
            <Price>
              <h4>Price:</h4>

              {activeCurrency && <span>{price}</span>}
            </Price>

            <Counter
              id={p.id}
              className="row"
              getQty={(qty) => this.setState({ qty })} // CB to get qty back from child
            />
          </div>

          <BtnPrimary onClick={() => addToCart(p.id, selAttributes, qty)}>
            Add to Cart
          </BtnPrimary>

          <Description dangerouslySetInnerHTML={createDesc(p.description)} />
        </Right>
      </Container>
    );
  }
}
