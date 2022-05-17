import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const ItemImg = styled.div`
  position: relative;
  margin-bottom: 2.4rem;
  height: 330px;
  ${flexCenter}

  img {
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center top;
  }

  @media (max-width: 678px) {
    height: 100%;

    img {
      height: auto;
    }
  }
`;

export const ItemCart = styled.div`
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

  @media (max-width: 1024px) {
    opacity: 1 !important;
  }

  @media (max-width: 678px) {
    opacity: 1 !important;
  }
`;

export const ItemName = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.88rem;
`;

export const ItemBrand = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 2.88rem;
`;

export const ItemPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  position: relative;
  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 35px 0px #a8acb030;

    ${ItemCart} {
      opacity: 1;
    }
  }

  ${({ noStock }) => noStock && `
      opacity: 0.5;

      ${ItemImg}::before {
        content: "Out of Stock";
        color: #8d8f9a;
        font-size: 2.4rem;
        font-weight: 400;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 20%;
      }
  `}

  @media (max-width: 1024px) {
    box-shadow: 0px 4px 35px 0px #a8acb030;
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;

export const List = styled.div`
  margin-top: 11.9rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10.3rem 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr;

    ${Item} {
      box-shadow: 0px 4px 35px 0px #a8acb030;

      ${ItemImg} {
        height: 100%;

        img {
          height: auto;
        }
      }

      ${ItemCart} {
        opacity: 1 !important;
      }
    }
  }
`;
