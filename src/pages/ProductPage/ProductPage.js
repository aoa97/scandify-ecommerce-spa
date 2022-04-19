import { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { animated, Spring } from "react-spring";
import { getProductById } from "../../redux/actions/categoryActions";
import { addToCart } from "../../redux/actions/cartActions";
import { handlePrice } from "../../helpers/productHelpers";
import StyledProductPage from "./ProductPageStyled";

class ProductPage extends Component {
  state = {
    galleryImage: "",
    selAttributes: {},
  };

  handleAttributes(name, value) {
    this.setState({
      selAttributes: { ...this.state.selAttributes, [name]: value },
    });
  }

  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const { product: p, activeCurrency, addToCart } = this.props;
    const { galleryImage } = this.state;
    const { symbol, amount } = handlePrice(p.prices, activeCurrency);

    const createDesc = (x) => {
      return { __html: x };
    };

    return (
      <>
        <Helmet>
          <title>{p.name}</title>
        </Helmet>

        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(styles) => (
            <animated.div style={styles}>
              <StyledProductPage>
                {/* Left: Gallery */}
                <div className="productPage__left">
                  <div className="gallery">
                    {p.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className={galleryImage === img ? "active" : ""}
                        onClick={() => this.setState({ galleryImage: img })}
                      />
                    ))}
                  </div>

                  <div className="img-view">
                    <img src={galleryImage ? galleryImage : p.gallery[0]} />
                  </div>
                </div>

                {/* Right: Details */}
                <div className="productPage__right">
                  <div className="product__headings">
                    <h2>{p?.brand}</h2>
                    <p>{p?.name}</p>
                  </div>

                  {p.attributes.map((a, i) => (
                    <div key={i} className="product__sizes">
                      <h4>{a.name}:</h4>

                      <div className="product__sizes__btns">
                        {a.name === "Color"
                          ? a.items.map((x, j) => (
                              <button
                                key={j}
                                value={x.value}
                                style={{ background: x.value }}
                                onClick={() =>
                                  this.handleAttributes(a.name, x.value)
                                }
                                className={
                                  this.state.selAttributes[a.name] === x.value
                                    ? "color active-color"
                                    : "color"
                                }
                              />
                            ))
                          : a.items.map((x, j) => (
                              <button
                                key={j}
                                value={x.value}
                                onClick={() =>
                                  this.handleAttributes(a.name, x.value)
                                }
                                className={
                                  this.state.selAttributes[a.name] === x.value
                                    ? "active"
                                    : ""
                                }
                              >
                                {x.value}
                              </button>
                            ))}
                      </div>
                    </div>
                  ))}

                  <div className="product__price">
                    <h4>Price:</h4>
                    {this.props.activeCurrency && (
                      <span className="productItem__price">
                        {symbol}
                        {amount}
                      </span>
                    )}
                  </div>

                  <button
                    className="product__cartBtn"
                    onClick={() => addToCart(p.id, this.state.selAttributes)}
                  >
                    Add to Cart
                  </button>

                  <p
                    className="product__desc"
                    dangerouslySetInnerHTML={createDesc(p.description)}
                  />
                </div>
              </StyledProductPage>
            </animated.div>
          )}
        </Spring>
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
