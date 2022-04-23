import { Component } from "react";
import {
  AttributeBtn,
  AttributeWrapper,
  AttributeItem,
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
    const { attributes } = this.props;
    const { selAttributes } = this.state;

    return (
      <>
        {attributes.map((a, i) => (
          <AttributeItem key={i}>
            <h4>{a.name}:</h4>

            <AttributeWrapper>
              {a.items.map((x, j) => (
                <AttributeBtn
                  key={j}
                  value={x.value}
                  active={selAttributes[a.name] === x.value}
                  colorAttr={a.name === "Color" && x.value}
                  onClick={() => this.handleAttributes(a.name, x.value)}
                >
                  {a.name !== "Color" && x.value}
                </AttributeBtn>
              ))}
            </AttributeWrapper>
          </AttributeItem>
        ))}
      </>
    );
  }
}
