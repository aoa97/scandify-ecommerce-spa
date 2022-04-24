import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const Right = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.4rem;

  .imgWrapper {
    ${flexCenter};
    width: 200px;
    height: 288px;
    position: relative;

    .gallery {
      position: absolute;
      bottom: 1.6rem;
      right: 1.6rem;
      display: flex;
      column-gap: .8rem;
      cursor: pointer;

      svg:hover {
        background: ${({theme}) => theme.colors.black};
      }
    }

    img {
      width: 100%;
      height: 100%;
    }

    @media (max-width: 540px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2.brand {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }

  h2.name {
    font-size: 3rem;
    font-weight: 400;
  }

  h3.price {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 2.4rem;
  border-top: 0.1rem solid #e5e5e5;
  column-gap: 2rem;

  @media (max-width: 540px) {
    flex-direction: column-reverse;
    row-gap: 2rem;
  }
`;
