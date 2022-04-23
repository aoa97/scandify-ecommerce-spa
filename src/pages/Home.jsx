import styled from "styled-components";
import { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Loader, ProductList } from "../components";

class HomePage extends Component {
  render() {
    const { history, category, loading } = this.props;

    return (
      <>
        <Helmet>
          <title>Welcome to Scandify</title>
        </Helmet>

        {loading && <Loader />}

        {!loading && (
          <HomePageStyled>
            <h1>{category.name.toUpperCase()}</h1>
            <ProductList nav={history.push} products={category.products} />
          </HomePageStyled>
        )}
      </>
    );
  }
}

const HomePageStyled = styled.div`
  padding: 8rem 0;

  h1 {
    font-size: 4.2rem;
    font-weight: 400;
  }
`;

const mapStateToProps = (state) => {
  return {
    category: state.categoryData.category,
    loading: state.categoryData.loading,
    error: state.categoryData.error,
  };
};

export default connect(mapStateToProps)(HomePage);
