import styled from "styled-components";
import { container, flexCenter, flexSpaceBetween } from "../../styles/mixins";

/* Start Right */
export const Badge = styled.div`
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
`;

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CurrencyIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Right = styled.div`
  position: relative;
  flex: 1;
  flex-shrink: 1;
  display: flex;
  justify-content: flex-end;
  column-gap: 2.2rem;

  @media (max-width: 667px) {
    order: 3;
  }
`;
/* End Right */

/* Start Center */
export const Center = styled.div`
  flex: 1;
  ${flexCenter}

  @media (max-width: 667px) {
    order: 1;
  }
`;
/* End Center */

/* Start Left */
export const Category = styled.li`
  cursor: pointer;
  height: 100%;
  padding: 3rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};

  ${({ active, theme }) =>
    active &&
    `
      font-weight: 600;
      color: ${theme.colors.primary};
      border-bottom: 0.2rem solid ${theme.colors.primary};
  `}

  @media (max-width: 468px) {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
`;

export const Left = styled.ul`
  flex: 1;
  display: flex;

  @media (max-width: 667px) {
    order: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 468px) {
    top: 6rem;
    background: inherit;
    width: 100%;
    left: 0;
    transform: translateX(0);
    ${flexCenter}
    column-gap: 1rem;
  }
`;
/* End Left */

/* Navbar Container */
export const Container = styled.div`
  ${container}
  position: sticky;
  top: 0;
  z-index: 5;
  background: ${({ theme }) => theme.colors.white};
  ${flexSpaceBetween}

  @media (max-width: 667px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (max-width: 468px) {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
`;
