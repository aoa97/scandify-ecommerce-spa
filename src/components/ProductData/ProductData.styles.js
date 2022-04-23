import styled from "styled-components";
import { flexCenter, flexSpaceBetween } from "../../styles/mixins";

// Right
export const Description = styled.div`
  margin-top: 4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.559rem;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Button = styled.button`
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
`;

export const Price = styled.div`
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
`;

export const Title = styled.div`
  /* Brand */
  h2 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }

  /* Name */
  p {
    font-size: 3rem;
    font-weight: 400;
  }
`;

export const Right = styled.div`
  flex: 1;
  padding-right: 5.2rem;
  padding-left: 10rem;

  @media (max-width: 813px) {
    padding: 0;
  }
`;

// Left
export const Preview = styled.div`
  align-self: flex-start;
  width: 100%;
  ${flexCenter}

  img {
    max-width: 100%;
    height: 100%;
  }
`;

export const Gallery = styled.div`
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

  @media (max-width: 946px) {
    order: 2;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
    max-width: 100%;
    overflow: auto;
    margin-top: 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  ${flexSpaceBetween}
  align-self: flex-start;
  column-gap: 4.379rem;

  @media (max-width: 946px) {
    flex-direction: column;
  }

  @media (max-width: 813px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }
`;

// Component
export const Container = styled.div`
  padding-top: 8rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 813px) {
    flex-direction: column;
    padding: 4rem 0;
  }

  @media (max-width: 468px) {
    padding-top: 8rem;
  }
`;
