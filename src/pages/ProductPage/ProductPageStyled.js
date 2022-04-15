import styled from "styled-components";
import { flexCenter, flexSpaceBetween } from "../../styles/mixins";

const ProductPageStyled = styled.div`
  padding-top: 8rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  .productPage__left {
    flex: 1;
    ${flexSpaceBetween}
    align-self: flex-start;
    column-gap: 4.379rem;

    .gallery {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      row-gap: 3.239rem;

      img {
        width: 8rem;
        height: 8rem;
        opacity: 0.7;
        transition: 0.3s opacity ease;

        &:hover {
          cursor: pointer;
          opacity: 1;
        }

        &.active {
          opacity: 1;
        }
      }
    }

    .img-view {
      align-self: flex-start;
      width: 100%;
      ${flexCenter}

      img {
        max-width: 100%;
        height: 100%;
      }
    }
  }

  .productPage__right {
    flex: 1;
    padding-right: 5.2rem;
    padding-left: 10rem;

    .product__headings {
      h2 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 1.6rem;
      }

      p {
        font-size: 3rem;
        font-weight: 400;
      }
    }

    .product__sizes {
      margin-top: 4.3rem;

      h4 {
        font-size: 1.8rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0.8rem;
      }

      .product__sizes__btns {
        display: flex;
        column-gap: 1.2rem;

        button {
          width: 6.3rem;
          height: 4.5rem;
          font-size: 1.6rem;
          font-weight: 400;
          font-family: "Source Sans Pro", sans-serif;
          border: 1px solid ${({ theme }) => theme.colors.black};

          &:hover {
            background: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }

    .product__price {
      margin-top: 4rem;

      h4 {
        font-size: 1.8rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      span {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }

    .product__cartBtn {
      margin-top: 2rem;
      width: 100%;
      height: 5.2rem;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }

    .product__desc {
      margin-top: 4rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.559rem;
      font-family: "Roboto", sans-serif;
    }
  }

  @media (max-width: 946px) {
    .productPage__left {
      flex-direction: column;
      .gallery {
        order: 2;
        flex-direction: row;
        align-items: center;
        column-gap: 1rem;
        max-width: 100%;
        overflow: auto;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 813px) {
    flex-direction: column;
    padding: 4rem 0;

    .productPage__left {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 4rem;
    }

    .productPage__right {
      padding: 0;
    }
  }

  @media (max-width: 468px) {
    padding-top: 8rem;
  }
`;

export default ProductPageStyled;
