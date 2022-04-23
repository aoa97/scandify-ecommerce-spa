import styled from "styled-components";
import { flexSpaceBetween } from "../../styles/mixins";

const StyledCartMenu = styled.div`
  width: fit-content;

  .cartMenu__header {
    font-size: 2.56rem;
    font-weight: 700;
    padding-bottom: 1.5rem;

    span {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .cartMenu__products {
    max-height: 60vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
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
      transition: 0.5s all ease;

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
    width: 35rem;
    height: 35rem;
    margin: 0 auto;
  }

  @media (max-width: 330px) {
    width: 85vw;

    .cartMenu__products {
      display: flex;
      flex-direction: column;

      .cartItem {
        align-items: stretch;
        flex-direction: column;
        row-gap: 2rem;

        .cartItem__right {
          /* flex-direction: column-reverse; */
          .cartItem__img {
            display: none;
          }

          .counter {
            margin: 0;
            width: 50%;
            flex-direction: row;
            justify-content: space-between;
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
