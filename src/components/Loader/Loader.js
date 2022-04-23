import { Component } from "react";
import Lottie from "lottie-react";
import loader from "./loader.json";
import styled from "styled-components";

export default class Loader extends Component {
  componentDidMount() {
    document.querySelector("nav").style.display = "none";
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.display = "flex";
    document.body.style.overflow = "auto";
  }

  render() {
    return (
      <StyledLoader>
        <Lottie
          className="loader"
          animationData={loader}
          loop={true}
          autoPlay={true}
        />
      </StyledLoader>
    );
  }
}

const StyledLoader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 200px;
    height: 200px;
  }
`;
