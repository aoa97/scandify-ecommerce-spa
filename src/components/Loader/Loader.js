import { Component } from "react";
import Lottie from "lottie-react";
import loader from "./loader.json";

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
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie animationData={loader} style={{ width: 200, height: 200 }} />
      </div>
    );
  }
}
