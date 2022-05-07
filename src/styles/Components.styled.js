import styled from "styled-components";

export const BtnPrimary = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 5.2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
