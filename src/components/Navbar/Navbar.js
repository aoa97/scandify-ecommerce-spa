import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoryData } from "../../redux/actions/categoryActions";
import { getCurrencies } from "../../redux/actions/currenciesActions";
import { updateQty } from "../../redux/actions/cartActions";
import { IconCart, IconChevronDown, IconLogo } from "../svg/IconSVG";
import CartMenu from "../CartMenu/CartMenu";
import CurrencyMenu from "../CurrencyMenu/CurrencyMenu";
import StyledNavbar from "./NavbarStyled";

class Navbar extends Component {
  state = {
    cartMenu: false,
    currencyMenu: false,
    category: "all",
  };

  handleActiveCaregory(category) {
    this.setState({ category });
  }

  componentDidMount() {
    this.props.getCategoryData(this.state.category);
    this.props.getCurrencies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.props.getCategoryData(this.state.category);
    }
  }

  render() {
    return (
      <StyledNavbar>
        {/* Left */}
        <NavLink
          to={window.location.pathname === "/" ? "" : "/"}
          className="nav__left"
        >
          <ul>
            <li
              onClick={() => this.setState({ category: "all" })}
              className={this.state.category === "all" ? "active" : ""}
            >
              all
            </li>

            <li
              onClick={() => this.setState({ category: "clothes" })}
              className={this.state.category === "clothes" ? "active" : ""}
            >
              clothes
            </li>

            <li
              onClick={() => this.setState({ category: "tech" })}
              className={this.state.category === "tech" ? "active" : ""}
            >
              tech
            </li>
          </ul>
        </NavLink>

        {/* Center */}
        <NavLink to="/">
          <div className="nav__center">
            <IconLogo />
          </div>
        </NavLink>

        {/* Right */}
        <div className="nav__right">
          <div
            className="currency-icon"
            onClick={() =>
              this.setState({ currencyMenu: !this.state.currencyMenu })
            }
          >
            <span>{this.props.activeCurrency?.symbol}</span>

            {this.state.currencyMenu ? (
              <>
                <IconChevronDown rotate="true" />
                <CurrencyMenu />
              </>
            ) : (
              <IconChevronDown />
            )}
          </div>

          <div
            className="cart-icon"
            onClick={() => this.setState({ cartMenu: !this.state.cartMenu })}
          >
            <div className="badge">{this.props.cart.length}</div>

            <IconCart />

            {this.state.cartMenu && (
              <CartMenu
                cart={this.props.cart}
                activeCurrency={this.props.activeCurrency}
                updateQty={this.props.updateQty}
              />
            )}
          </div>
        </div>
      </StyledNavbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalPrice:
      state.cart.length > 0 ? state.cart.reduce((a, x) => a + x.price) : 0,
    activeCurrency: state.currencyData.activeCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => dispatch(getCurrencies()),
    getCategoryData: (cat) => dispatch(getCategoryData(cat)),
    updateQty: (id) => dispatch(updateQty(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
