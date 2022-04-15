import { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Loader, ProductList } from "../../components";
import HomePageStyled from "./HomePageStyled";

class HomePage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Welcome to Scandify</title>
        </Helmet>

        <CSSTransition
          in={this.props.loading}
          timeout={1000}
          unmountOnExit
          classNames="my-node"
        >
          <Loader />
        </CSSTransition>

        {!this.props.loading && (
          <HomePageStyled>
            {/* Top Heading */}
            <h1>{this.props.category.name.toUpperCase()}</h1>

            {/* Product List */}
            {this.props.category && (
              <ProductList products={this.props.category.products} />
            )}
          </HomePageStyled>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryData.category,
    loading: state.categoryData.loading,
    error: state.categoryData.error,
  };
};

export default connect(mapStateToProps)(HomePage);
