import { Component } from "react";
import { calcPrice } from "../../helpers/productHelpers";
import { BtnPrimary } from "../../styles/Components.styled";
import ProductAttributes from "../ProductAttributes/ProductAttributes";
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

export default class ProductData extends Component {
  state = {
    galleryImage: "",
  };

  render() {
    const { product: p, activeCurrency, addToCart } = this.props;
    const { galleryImage } = this.state;

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
                  className={galleryImage === img ? "active" : ""}
                  onClick={() => this.setState({ galleryImage: img })}
                />
              ))}
          </Gallery>

          <Preview>
            <img src={galleryImage ? galleryImage : p.gallery[0]} />
          </Preview>
        </Left>

        <Right>
          <Title>
            <h2>{p?.brand}</h2>
            <p>{p?.name}</p>
          </Title>

          <ProductAttributes attributes={p.attributes} />

          <Price>
            <h4>Price:</h4>

            {activeCurrency && (
              <span>{calcPrice(p.prices, activeCurrency)}</span>
            )}
          </Price>

          <BtnPrimary onClick={() => addToCart(p.id, this.state.selAttributes)}>
            Add to Cart
          </BtnPrimary>

          <Description dangerouslySetInnerHTML={createDesc(p.description)} />
        </Right>
      </Container>
    );
  }
}
