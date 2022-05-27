import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setActiveCategory } from "../../redux/actions/categoryActions";
import { getCurrencies } from "../../redux/actions/currenciesActions";
import { IconCart, IconChevronDown, IconLogo } from "../svg/IconSVG";
import { calcTotalQty } from "../../helpers/productHelpers";
import CartList from "../CartList/CartList";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import Dropdown from "../Dropdown/Dropdown";
import {
  Container,
  Category,
  Left,
  Center,
  Right,
  Badge,
  CartIcon,
  CurrencyIcon,
} from "./Navbar.styles";

class Navbar extends Component {
  state = {
    cartMenu: false,
    currencyMenu: false,
  };

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    const { cartMenu, currencyMenu } = this.state;
    const { cart, activeCurrency, activeCategory, setActiveCategory, location, history } = this.props;
    const totalQty = calcTotalQty(cart);

    return (
      <Container>
        {/* Left [Links] */}
        <Left onClick={() => (location.pathname !== '/') && (history.push('/'))}>
          <Category active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>all</Category>
          <Category active={activeCategory === "clothes"} onClick={() => setActiveCategory("clothes")}>clothes</Category>
          <Category active={activeCategory === "tech"} onClick={() => setActiveCategory("tech")}>tech</Category>
        </Left>

        {/* Center [Brand] */}
        <NavLink to="/">
          <Center>
            <IconLogo />
          </Center>
        </NavLink>

        {/* Right [Dropdowns] */}
        <Right>
          <CurrencyIcon onClick={() => this.setState({ currencyMenu: !currencyMenu, cartMenu: false })}>
            {activeCurrency?.symbol} 
            <IconChevronDown />
          </CurrencyIcon>

          <CartIcon onClick={() => this.setState({ cartMenu: !cartMenu, currencyMenu: false })}>
            <Badge>{totalQty}</Badge>
            <IconCart />
          </CartIcon>
        </Right>

        {/* Currency Dropdown Menu */}
        {currencyMenu && (
          <CurrencySwitcher closeMenu={() => this.setState({ currencyMenu: false })} />
        )}

        {/* Cart Dropdown Menu */}
        {cartMenu && (
          <Dropdown closeMenu={() => this.setState({ cartMenu: false })}>
            <CartList mini closeMini={() => this.setState({ cartMenu: false })} />
          </Dropdown>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    activeCurrency: state.currencyData.activeCurrency,
    activeCategory: state.categoryActive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrencies: () => dispatch(getCurrencies()),
    setActiveCategory: (category) => dispatch(setActiveCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
