import styled from "styled-components";

const StyledCurrencySwitcher = styled.div`
  .currency__item {
    margin-bottom: 2.1rem;
  }

  .currency__item:last-child {
    margin-bottom: 0;
  }

  .currency__item:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }

  .currency__item.active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .currency__item span {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .currency__item span:first-child {
    margin-right: 0.5rem;
  }
`;

export default StyledCurrencySwitcher;
