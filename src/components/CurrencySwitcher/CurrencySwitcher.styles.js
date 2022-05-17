import styled from "styled-components";

export const CurrencyItem = styled.div`
  margin-bottom: 2.1rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ active, theme }) => active &&`
    color: ${theme.colors.primary};
  `}

  span {
    font-size: 1.8rem;
    font-weight: 500;
  }

  span:first-child {
    margin-right: 0.5rem;
  }
`;
