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

export const Price = styled.div`
  margin-top: 3.6rem;

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
  margin-bottom: 4.3rem;

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

  .price-counter {
    ${flexSpaceBetween}
  }

  @media (max-width: 813px) {
    padding: 0;
  }
`;

// Left
export const Preview = styled.div`
  position: relative;
  align-self: flex-start;
  width: 100%;
  ${flexCenter}

  img {
    width: 100%;
    height: 100%;
  }

  .slider {
    display: none;
    position: absolute;
    bottom: 1.6rem;
    right: 1.6rem;
    column-gap: 0.8rem;
    cursor: pointer;

    @media (max-width: 1095px) {
      display: flex;
    }

    svg:hover {
      background: ${({ theme }) => theme.colors.black};
    }
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

  @media (max-width: 1095px) {
    display: none;
  }
`;

export const Left = styled.div`
  flex: 1;
  ${flexSpaceBetween}
  align-self: flex-start;
  column-gap: 4.379rem;

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
