import styled from "styled-components";
import { flexSpaceBetween, flexCenter } from "../../styles/mixins";

const StyledProductList = styled.div`
  .center {
    ${flexCenter}
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3rem;
    width: fit-content;
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
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .cart-list {
    margin-top: 5.9rem;
  }

  @media (max-width: 588px) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    .cartItem {
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
    }
  }
`;

export default StyledProductList;
