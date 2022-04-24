import { Component } from "react";
import { connect } from "react-redux";
import { Counter } from "./Counter.styles";
import { updateQty } from "../../redux/actions/cartActions";

class CartListProduct extends Component {
  state = {
    qty: this.props.qty,
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.qty !== this.state.qty) {
      this.props.updateQty({
        id: this.props.id,
        qty: this.state.qty,
      });
    }
  }

  render() {
    return (
      <Counter>
        <div
          className="op"
          onClick={() => this.setState({ qty: this.state.qty + 1 })}
        >
          <span>+</span>
        </div>

        <div className="val">{this.props.qty}</div>

        <div
          className="op"
          onClick={() => this.setState({ qty: this.state.qty - 1 })}
        >
          <span>-</span>
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
