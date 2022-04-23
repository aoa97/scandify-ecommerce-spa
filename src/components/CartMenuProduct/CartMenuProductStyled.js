import styled from "styled-components";
import { flexSpaceBetween, flexCenter } from "../../styles/mixins";

const StyledCartMenuProduct = styled.div`
  .cartItem {
    ${flexSpaceBetween}
    padding-top: 2rem;
    border-top: 0.1rem solid #e5e5e5;
    column-gap: 2rem;

    .cartItem__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .carItem__brand,
      .carItem__name {
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      .carItem__price {
        font-size: 1.6rem;
        font-weight: 500;
      }

      .product__attributes {
        display: flex;
        flex-direction: column;
        margin-top: 2.7rem;
        gap: 1.2rem;

        .product__attribute {
          h4 {
            font-size: 1.2rem;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 0.8rem;
          }

          .product__attribute__btns {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;

            button {
              ${flexCenter}
              position: relative;
              width: 4rem;
              height: 2rem;
              min-width: fit-content;
              min-height: fit-content;
              padding: 0.1rem 0.5rem;
              font-size: 1.4rem;
              font-weight: 400;
              font-family: "Source Sans Pro", sans-serif;
              border: 1px solid ${({ theme }) => theme.colors.black};
              transition: 0.5s all ease;

              &:hover,
              &.active {
                background: ${({ theme }) => theme.colors.black};
                color: ${({ theme }) => theme.colors.white};
              }

              &.active-color::after,
              &.color:hover::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 5px;
                right: 0;
                bottom: -10px;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                background: ${({ theme }) => theme.colors.black};
              }
            }
          }
        }
      }
    }

    .cartItem__right {
      display: flex;
      height: 100%;

      .counter {
        ${flexSpaceBetween}
        flex-direction: column;
        margin-right: 1.2rem;

        .counter__operator {
          ${flexCenter}
          cursor: pointer;
          width: fit-content;
          height: fit-content;
          padding: 0.1rem 0.5rem;
          font-size: 1.5rem;
          font-weight: 400;
          font-family: "Source Sans Pro", sans-serif;
          border: 1px solid ${({ theme }) => theme.colors.black};
          transition: 0.5s all ease;

          &:hover {
            background: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.white};
          }
        }
        .counter__value {
          font-size: 2.4rem;
          font-weight: 500;
        }
      }

      .cartItem__img {
        width: 105px;
        height: 137px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default StyledCartMenuProduct;
