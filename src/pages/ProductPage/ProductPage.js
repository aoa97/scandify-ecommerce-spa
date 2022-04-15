import { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getProductById } from "../../redux/actions/categoryActions";
import { addToCart } from "../../redux/actions/cartActions";
import { handlePrice } from "../../helpers.js/productHelpers";
import StyledProductPage from "./ProductPageStyled";

class ProductPage extends Component {
  state = {
    galleryImage: "",
  };

  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    const { product: p, activeCurrency, addToCart } = this.props;
    const { galleryImage } = this.state;
    const { symbol, amount } = handlePrice(p.prices, activeCurrency);

    return (
      <>
        <Helmet>
          <title>{p.name}</title>
        </Helmet>

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

            {p.attributes.length > 0 && (
              <div className="product__sizes">
                <h4>{p.attributes[0]?.name}:</h4>

                <div className="product__sizes__btns">
                  {p.attributes[0]?.items.map((s) => (
                    <div key={s.id}>
                      {p.attributes[0]?.name === "Color" ? (
                        <button
                          value={s.value}
                          style={{ background: s.value }}
                        />
                      ) : (
                        <button value={s.value}>{s.value}</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="product__price">
              <h4>Price:</h4>
              {this.props.activeCurrency && (
                <span className="productItem__price">
                  {symbol}
                  {amount}
                </span>
              )}
            </div>

            <button className="product__cartBtn" onClick={() => addToCart(p.id)}>
              Add to Cart
            </button>

            <p className="product__desc">
              {p.description?.replace(/(<([^>]+)>)/gi, "")}
            </p>
          </div>
        </StyledProductPage>
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
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
