import { Component } from "react";
import { connect } from "react-redux";
import { Counter } from "./Counter.styles";
import { updateQty } from "../../redux/actions/cartActions";
import { IconMinus } from "../svg/IconSVG";

class CartListProduct extends Component {
  state = {
    qty: this.props.qty || 1,
  };

  handleIncrement = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  handleDecrement = () => {
    const { qty } = this.state;
    if (!this.props.qty && qty !== 1) {
      this.setState({ qty: this.state.qty - 1 });
    } else if (this.props.qty) { // Able to remove
      this.setState({ qty: this.state.qty - 1 });
    }
  };

  componentDidUpdate(prevProp, prevState) {
    const { cartId, getQty, updateQty } = this.props;
    const { qty } = this.state;

    if (prevState.qty !== qty) {
      if (getQty) getQty(qty); // Parent CB
      if (this.props.qty) updateQty({ cartId, qty });
    }
  }

  render() {
    const { qty } = this.props;

    return (
      <Counter {...this.props}>
        <div className="op" onClick={this.handleIncrement}>
          <span>+</span>
        </div>

        <div className="val">{qty ? qty : this.state.qty}</div>

        <div className="op" onClick={this.handleDecrement}>
          <IconMinus />
        </div>
      </Counter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQty: (item) => dispatch(updateQty(item)),
  };
};

export default connect(null, mapDispatchToProps)(CartListProduct);
