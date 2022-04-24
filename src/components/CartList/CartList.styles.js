import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const EmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  row-gap: 3rem;
  transform: translateY(-1rem);

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

  @media (max-width: 588px) {
    display: flex;
    flex-direction: column;

    /* .cartItem {
      min-width: 50vw;
      align-items: stretch;
      flex-direction: column-reverse;
      row-gap: 2rem;

      .cartItem__left {
        .product__sizes__btns {
          flex-wrap: wrap;
        }
      }

      .cartItem__right {
        flex-direction: column-reverse;

        .cartItem__img {
          width: 100%;
          margin-bottom: 1rem;
        }

        .counter {
          flex-direction: row;
          justify-content: space-evenly;
        }
      }
    } */
  }
`;

export const Summary = styled.div`
  div {
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
