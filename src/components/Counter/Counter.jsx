import { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./Counter.styles";
import { updateQty } from "../../redux/actions/cartActions";
import { IconMinus } from "../svg/IconSVG";

class CartListProduct extends Component {
  handleIncrement = () => {
    const { cartId, updateQty, setQty, qty } = this.props;
    setQty ? setQty(qty + 1) : updateQty(cartId, qty + 1);
  };

  handleDecrement = () => {
    const { cartId, updateQty, setQty, qty } = this.props;
    setQty ? setQty(qty - 1) : updateQty(cartId, qty - 1);
  };

  render() {
    return (
      <Container {...this.props}>
        <div className="op" onClick={this.handleIncrement}>
          <span>+</span>
        </div>

        <div className="val">{this.props.qty}</div>

        <div className="op" onClick={this.handleDecrement}>
          <IconMinus />
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQty: (cartId, qty) => dispatch(updateQty(cartId, qty)),
  };
};

export default connect(null, mapDispatchToProps)(CartListProduct);
