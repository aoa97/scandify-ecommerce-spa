import styled from "styled-components";
import { flexSpaceBetween, flexCenter } from "../../styles/mixins";

const StyledCartListProduct = styled.div`
  .cartItem {
    ${flexSpaceBetween}
    padding-right: 13.55rem;
    border-top: 0.1rem solid #e5e5e5;
    padding: 2rem 0;

    .cartItem__left {
      .carItem__brand {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 1.6rem;
      }
      .carItem__name {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 1.2rem;
      }
      .carItem__price {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
      }

      .product__sizes {
        h4 {
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .product__sizes__btns {
          display: flex;
          gap: 1.2rem;

          button {
            width: 6.3rem;
            height: 4.5rem;
            font-size: 1.6rem;
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

    .cartItem__right {
      display: flex;
      height: 100%;

      .counter {
        ${flexSpaceBetween}
        flex-direction: column;
        margin-right: 1.2rem;

        .counter__operator {
          cursor: pointer;
          ${flexCenter}
          width: 4.5rem;
          height: 4.5rem;
          font-size: 2.6rem;
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
        ${flexCenter};
        padding: 0 1rem;
        width: 141px;
        height: 185px;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
`;

export default StyledCartListProduct;
