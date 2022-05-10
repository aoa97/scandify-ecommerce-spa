import { Component } from "react";
import Lottie from "lottie-react";
import loader from "./loader.json";
import styled from "styled-components";

export default class Loader extends Component {
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
  height: 100%;
  width: 100%;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  overflow: hidden;

  .loader {
    width: 200px;
    height: 200px;
  }
`;
