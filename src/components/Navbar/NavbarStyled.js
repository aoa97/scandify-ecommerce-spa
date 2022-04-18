import styled from "styled-components";
import { container, flexCenter, flexSpaceBetween } from "../../styles/mixins";

const StyledNavbar = styled.nav`
  ${container}
  position: sticky;
  top: 0;
  z-index: 5;
  background: ${({ theme }) => theme.colors.white};
  ${flexSpaceBetween}

  /* Left */
  .nav__left {
    flex: 1;
    ul {
      display: flex;

      li {
        cursor: pointer;
        height: 100%;
        padding: 3rem 1.6rem;
        font-size: 1.6rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};

        &.active {
          border-bottom: 0.2rem solid ${({ theme }) => theme.colors.primary};
          font-weight: 600;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  /* Center */
  .nav__center {
    flex: 1;
    ${flexCenter}
  }

  /* Right */
  .nav__right {
    position: relative;
    flex: 1;
    flex-shrink: 1;
    display: flex;
    justify-content: flex-end;
    column-gap: 2.2rem;

    .currency-icon {
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      column-gap: 1rem;
      font-size: 1.8rem;
      font-weight: 500;
    }

    .cart-icon {
      position: relative;
      cursor: pointer;

      .badge {
        position: absolute;
        bottom: 1.3rem;
        left: 0.9rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        font-family: "Roboto", sans-serif;
        ${flexCenter}
      }
    }
  }

  /* Disable product if no stock */
  .product-false {
    pointer-events: none;
  }

  /* Start Media Queries */
  @media (max-width: 667px) {
    padding-top: 3rem;
    padding-bottom: 3rem;

    .nav__left {
      order: 2;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .nav__center {
      order: 1;
    }

    .nav__right {
      order: 3;
    }
  }

  @media (max-width: 468px) {
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    .nav__left {
      top: 6rem;
      background: inherit;
      width: 100%;
      left: 0;
      transform: translateX(0);
      ${flexCenter}
      column-gap: 1rem;

      li {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
      }
    }
  }
  /* End Media Queries */
`;

export default StyledNavbar;
