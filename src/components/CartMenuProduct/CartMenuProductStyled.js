import styled from "styled-components";
import { flexSpaceBetween, flexCenter } from "../../styles/mixins";

const StyledCartMenuProduct = styled.div`
  .cartItem {
    ${flexSpaceBetween}
    align-items: stretch;
    padding: 2rem 0;

    .cartItem__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .carItem__brand,
      .carItem__name {
        font-size: 1.6rem;
        font-weight: 300;
      }

      .carItem__price {
        font-size: 1.6rem;
        font-weight: 500;
      }

      .product__sizes__btns {
        display: flex;
        column-gap: 1.2rem;
        
        button {
          width: fit-content;
          height: fit-content;
          padding: 0.1rem 0.5rem;
          font-size: 1.4rem;
          font-weight: 400;
          font-family: "Source Sans Pro", sans-serif;
          border: 1px solid ${({ theme }) => theme.colors.black};
          transition: 0.5s all ease;

          &:hover {
            background: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.white};
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
