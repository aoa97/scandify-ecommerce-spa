import { Component } from "react";
import {
  AttributeBtn,
  AttributeBtns,
  AttributeItem,
  Container,
} from "./ProductAttributes.styles";

export default class ProductData extends Component {
  state = {
    selAttributes: {},
  };

  handleAttributes(name, value) {
    this.setState({
      selAttributes: { ...this.state.selAttributes, [name]: value },
    });
  }

  render() {
    const { attributes, mini } = this.props;
    const { selAttributes } = this.state;

    return (
      <Container>
        {attributes.map((a, i) => (
          <AttributeItem key={i} mini={mini}>
            <h4>{a.name}:</h4>

            <AttributeBtns>
              {a.items.map((x, j) => (
                <AttributeBtn
                  mini={mini}
                  key={j}
                  value={x.value}
                  active={selAttributes[a.name] === x.value}
                  colorAttr={a.name === "Color" && x.value}
                  onClick={() => this.handleAttributes(a.name, x.value)}
                >
                  {a.name !== "Color" && x.value}
                </AttributeBtn>
              ))}
            </AttributeBtns>
          </AttributeItem>
        ))}
      </Container>
    );
  }
}
