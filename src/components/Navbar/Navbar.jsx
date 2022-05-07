import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoryData } from "../../redux/actions/categoryActions";
import { getCurrencies } from "../../redux/actions/currenciesActions";
import { IconCart, IconChevronDown, IconLogo } from "../svg/IconSVG";
import CartList from "../CartList/CartList";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import StyledNavbar from "./Navbar.styles";
import Dropdown from "../Dropdown/Dropdown";
import { calcTotalQty } from '../../helpers/productHelpers';

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
    const { category, cartMenu, currencyMenu } = this.state;
    const { cart, activeCurrency } = this.props;
    const totalQty = calcTotalQty(cart)

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
              className={category === "all" ? "active" : ""}
            >
              all
            </li>

            <li
              onClick={() => this.setState({ category: "clothes" })}
              className={category === "clothes" ? "active" : ""}
            >
              clothes
            </li>

            <li
              onClick={() => this.setState({ category: "tech" })}
              className={category === "tech" ? "active" : ""}
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
              this.setState({ currencyMenu: !currencyMenu, cartMenu: false })
            }
          >
            <span>{activeCurrency?.symbol}</span>
            <IconChevronDown />
          </div>

          <div
            className="cart-icon"
            onClick={() =>
              this.setState({ cartMenu: !cartMenu, currencyMenu: false })
            }
          >
            <div className="badge">{totalQty}</div>

            <IconCart />
          </div>
        </div>

        {/* Currency Dropdown Menu */}
        {currencyMenu && (
          <CurrencySwitcher
            closeMenu={() => this.setState({ currencyMenu: false })}
          />
        )}

        {/* Cart Dropdown Menu */}
        {cartMenu && (
          <Dropdown closeMenu={() => this.setState({ cartMenu: false })}>
            <CartList
              mini
              closeMini={() => this.setState({ cartMenu: false })}
            />
          </Dropdown>
        )}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);