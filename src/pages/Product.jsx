import { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { animated, Spring } from "react-spring";
import { getProductById } from "../redux/actions/categoryActions";
import { addToCart } from "../redux/actions/cartActions";
import { ProductData, Loader } from "../components";

class ProductPage extends Component {
  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
    window.scrollTo({ top: 0 });
  }

  render() {
    const { product, loading } = this.props;

    return (
      <>
        <Helmet>
          <title>{product.name}</title>
        </Helmet>

        {loading && <Loader />}

        {!loading && (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(styles) => (
              <animated.div style={styles}>
                <ProductData {...this.props} />
              </animated.div>
            )}
          </Spring>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.categoryProduct.product,
    loading: state.categoryProduct.loading,
    error: state.categoryProduct.error,
    activeCurrency: state.currencyData.activeCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductById: (id) => dispatch(getProductById(id)),
    addToCart: (id, selAttributes) => dispatch(addToCart(id, selAttributes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
