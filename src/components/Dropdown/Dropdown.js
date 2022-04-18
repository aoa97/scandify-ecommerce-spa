import { Component } from "react";
import StyledDropdown from "./DropdownStyled";

export default class Dropdown extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }
  render() {
    return (
      <StyledDropdown onClick={(e) => e.stopPropagation()}>
        <div className="drop-outer" onClick={() => this.props.closeMenu()}>
          <div className="drop-menu" onClick={(e) => e.stopPropagation()}>
            {this.props.children}
          </div>
        </div>
      </StyledDropdown>
    );
  }
}
