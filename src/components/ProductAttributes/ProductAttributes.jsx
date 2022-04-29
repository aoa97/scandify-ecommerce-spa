import { Component } from "react";
import { connect } from "react-redux";
import { updateSelAttributes } from "../../redux/actions/cartActions";
import {
  AttributeBtn,
  AttributeBtns,
  AttributeItem,
  Container,
} from "./ProductAttributes.styles";

class ProductAttributes extends Component {
  state = {
    selAttributes: this.props.product.selAttributes,
  };

  handleAttributes(name, value) {
    this.setState({
      selAttributes: { ...this.state.selAttributes, [name]: value },
    });
  }

  componentDidUpdate(prevProp, prevState) {
    const { updateSelAttributes, product, getAttributes } = this.props;
    const { selAttributes } = this.state;

    if (prevState.selAttributes !== selAttributes) {
      if (getAttributes) getAttributes(selAttributes); // Return the results back to Parent [ICO ProductPage]

      updateSelAttributes({
        id2: product.id,
        selAttributes: selAttributes,
      });
    }
  }

  render() {
    const { product: p, mini } = this.props;
    const { selAttributes } = this.state;

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
                  active={selAttributes?.[a.name] === x?.value}
                  swatch={a.type === "swatch" && x?.value}
                  onClick={() => this.handleAttributes(a?.name, x?.value)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelAttributes: (item) => dispatch(updateSelAttributes(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductAttributes);
