import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  .drop-outer {
    cursor: pointer;
    padding-right: 5vw !important;
    position: absolute;
    right: 0;
    background: rgba(57, 55, 72, 0.22);
    width: 100vw;
    height: 100vh;
  }

  .drop-menu {
    margin-left: auto;
    background: ${({ theme }) => theme.colors.white};
    padding: 2rem 1.6rem;
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
    width: fit-content;
  }
`;

export default StyledDropdown;
