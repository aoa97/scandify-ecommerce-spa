import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  top: 3.8rem;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem 1.6rem;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  width: fit-content;
`;

export default StyledDropdown;
