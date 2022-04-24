import styled from "styled-components";

export const AttributeBtn = styled.button`
  width: 6.3rem;
  height: 4.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.black};
  transition: 0.3s all ease;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Active Attribute */
  ${({ active, theme }) => active &&`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  `}

  /* Color Attribute */
  ${({ colorAttr, theme }) => colorAttr &&`
    background: ${colorAttr};
    position: relative;
    width: 3.2rem;
    height: 3.2rem;

    &:hover{
      background: ${colorAttr};
    }

    &:hover::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      right: 0;
      bottom: -10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background: ${theme.colors.black};
    }
  `}

  /* Active Color Attribute Case */
  ${({ colorAttr, active, theme }) => colorAttr && active &&`
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      right: 0;
      bottom: -10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background: ${theme.colors.black};
    }
  `}
`;

export const AttributeBtns = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const AttributeItem = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;
