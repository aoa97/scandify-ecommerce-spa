import styled from "styled-components";
import { flexSpaceBetween } from "../../styles/mixins";

const StyledCartMenu = styled.div`
  min-width: 30rem;

  .cartMenu__header {
    font-size: 2.56rem;
    font-weight: 700;

    span {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .cartMenu__products {
    max-height: 60vh;
    overflow-y: auto;
  }

  .cartMenu__total {
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
  }

  .cartMenu__buttons {
    ${flexSpaceBetween}
    .btn {
      padding: 1.3rem 2.95rem;
      font-size: 1.4rem;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
      opacity: 0.7;
      transition: .5s all ease;

      &:hover {
        opacity: 1;
      }
    }

    .view-btn {
      border: 1px solid ${({ theme }) => theme.colors.black};

      &:hover {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .check-btn {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .empty-cart {
    padding: 3rem;
  }

  @media (max-width: 385px) {
    min-width: 70vw;

    .cartMenu__products {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cartItem {
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

    .cartMenu__buttons {
      flex-direction: column;
      align-items: stretch;
      row-gap: 1rem;
    }
  }
`;

export default StyledCartMenu;
