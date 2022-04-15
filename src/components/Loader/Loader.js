import { Component } from "react";
import Lottie from "lottie-react";
import loader from "./loader.json";
import StyledLoader from "./LoaderStyled";

export default class Loader extends Component {
  componentDidMount() {
    document.querySelector("nav").style.display = "none";
    document.body.style.overflow = "hidden"
  }

  componentWillUnmount() {
    document.querySelector("nav").style.display = "flex";
    document.body.style.overflow = "auto"
  }

  render() {
    return (
      <StyledLoader {...this.props}>
        <Lottie animationData={loader} className="loader" />
      </StyledLoader>
    );
  }
}
