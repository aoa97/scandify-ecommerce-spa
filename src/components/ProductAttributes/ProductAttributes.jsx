import { Component } from "react";
import {
  AttributeBtn,
  AttributeBtns,
  AttributeItem,
  Container,
} from "./ProductAttributes.styles";

export default class ProductAttributes extends Component {
  handleAttributes(name, value) {
    const { selAttributes, setSelAttributes } = this.props;
    setSelAttributes({ ...selAttributes, [name]: value });
  }

  render() {
    const { product: p, mini, noStock, selAttributes } = this.props;

    return (
      <Container>
        {p?.attributes?.map((a, i) => (
          <AttributeItem key={i} mini={mini}>
            <h4>{a?.name}:</h4>

            <AttributeBtns>
              {a.items?.map((x, j) => (
                <AttributeBtn
                  mini={mini}
                  key={j}
                  value={x.value}
                  active={selAttributes[a.name] === x.value}
                  noStock={noStock}
                  swatch={a.type === "swatch" && x.value}
                  onClick={() => this.handleAttributes(a.name, x.value)}
                >
                  {a.type !== "swatch" && x?.value}
                </AttributeBtn>
              ))}
            </AttributeBtns>
          </AttributeItem>
        ))}
      </Container>
    );
  }
}
