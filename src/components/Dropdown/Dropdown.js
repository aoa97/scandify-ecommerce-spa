import { Component } from "react";
import StyledDropdown from "./DropdownStyled";

export default class Dropdown extends Component {
  render() {
    return (
      <StyledDropdown onClick={(e) => e.stopPropagation()}>
        {this.props.children}
      </StyledDropdown>
    );
  }
}
