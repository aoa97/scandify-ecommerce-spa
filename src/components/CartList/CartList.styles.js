import styled from "styled-components";
import { flexCenter, flexSpaceBetween } from "../../styles/mixins";

export const EmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  row-gap: 3rem;
  transform: translateY(-1rem);

  ${({ mini }) => mini &&`
    padding-top: 3rem;
  `}

  svg {
    width: 15rem;
    height: 15rem;
  }

  p {
    font-size: 1.6rem;
  }

  .continue-btn {
    height: 5.2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0.9;
    width: 100%;
    ${flexCenter}

    &:hover {
      opacity: 1;
    }
  }
`;

export const CartWrapper = styled.div`
  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5.5rem;
  }

  // Mini Header
  h2 {
    font-size: 2.56rem;
    font-weight: 700;
    padding-bottom: 1.5rem;

    span {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  @media (max-width: 588px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Summary = styled.div`
  div {
    margin-top: 3.2rem;
    display: flex;
    column-gap: 1rem;
    font-size: 2.4rem;
    font-weight: 500;

    &:first-child {
      margin-bottom: 0.8rem;
    }

    &.total {
      margin-top: 2.4rem;
      column-gap: 1.6rem;
    }

    span {
      font-weight: 700;
    }
  }

  button {
    height: 4.3rem;
    width: 27.9rem;

    @media (max-width: 540px) {
      width: 100%;
    }
  }
`;

export const List = styled.div`
  ${({ mini }) => mini &&`
    max-height: 55vh;
    overflow: auto;
  `}
`;

export const MiniSummary = styled.div`
  ${flexSpaceBetween}
  margin-top: 3.2rem;
  margin-bottom: 3.5rem;

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const MiniButtons = styled.div`
  ${flexSpaceBetween}
  .btn {
    padding: 1.3rem 2.95rem;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    opacity: 0.7;
    transition: 0.5s all ease;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 374px) {
    flex-direction: column;
    row-gap: 1rem;

    .btn {
      width: 100%;
    }
  }

  .bag {
    border: 1px solid ${({ theme }) => theme.colors.black};

    &:hover {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .checkout {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
