import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

const StyledProductList = styled.div`
  margin-top: 11.9rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10.3rem 4rem;

  .productItem {
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    position: relative;
    transition: 0.3s all ease;

    &.false {
      opacity: 0.5;

      .productItem__img::before {
        content: "Out of Stock";
        color: #8d8f9a;
        font-size: 2.4rem;
        font-weight: 400;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 20%;
      }
    }

    .productItem__img {
      position: relative;
      margin-bottom: 2.4rem;
      height: 330px;
      ${flexCenter}

      img {
        max-width: 100%;
        height: 100%;
      }

      .productItem__cart {
        opacity: 0;
        ${flexCenter}
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary};
        position: absolute;
        bottom: -1.6rem;
        right: 2rem;
        transition: 0.3s all ease;
      }
    }

    .productItem__name {
      font-size: 1.8rem;
      font-weight: 300;
      line-height: 2.88rem;
    }

    .productItem__price {
      font-size: 1.8rem;
      font-weight: 500;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 35px 0px #a8acb030;

      .productItem__cart {
        opacity: 1;
      }
    }
  }

  /* Disable product if no stock */
  .product-false {
    pointer-events: none;
  }

  /* Start Media Queries */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    .productItem {
      box-shadow: 0px 4px 35px 0px #a8acb030;

      .productItem__cart {
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr;

    .productItem {
      box-shadow: 0px 4px 35px 0px #a8acb030;

      .productItem__img {
        height: 100%;

        img {
          height: auto;
        }
      }

      .productItem__cart {
        opacity: 1 !important;
      }
    }
  }
`;
/* End Media Queries */

export default StyledProductList;
