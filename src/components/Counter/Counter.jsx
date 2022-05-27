import { Component } from "react";
import { Container } from "./Counter.styles";
import { IconMinus } from "../svg/IconSVG";

export default class CartListProduct extends Component {
  handleIncrement = () => {
    const { setQty, qty } = this.props;
    setQty(qty + 1);
  };

  handleDecrement = () => {
    const { setQty, qty, create } = this.props;
    !create ? setQty(qty - 1) : qty > 1 && setQty(qty - 1); 
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
