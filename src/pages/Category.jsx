import styled from "styled-components";
import { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Loader, ProductList } from "../components";
import { getCategoryProducts } from "../redux/actions/categoryActions";

class CategoryPage extends Component {
  componentDidMount() {
    this.props.getCategoryProducts();
  }

  componentDidUpdate(prevProps) {
    const { category, getCategoryProducts } = this.props;

    if (prevProps.category !== category) {
      getCategoryProducts();
    }
  }

  render() {
    const { history, category, products, loading } = this.props;

    return (
      <>
        <Helmet>
          <title>Welcome to Scandify</title>
        </Helmet>

        {loading && <Loader />}

        {!loading && (
          <CategoryPageStyled>
            <h1>{category}</h1>
            <ProductList nav={history.push} products={products} />
          </CategoryPageStyled>
        )}
      </>
    );
  }
}

const CategoryPageStyled = styled.div`
  padding: 8rem 0;

  h1 {
    font-size: 4.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const mapStateToProps = (state) => {
  return {
    category: state.categoryActive,
    products: state.categoryProducts.products,
    loading: state.categoryProducts.loading,
    error: state.categoryProducts.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryProducts: () => dispatch(getCategoryProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
