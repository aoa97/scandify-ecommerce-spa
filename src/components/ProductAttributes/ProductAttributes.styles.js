import styled from "styled-components";

export const AttributeBtn = styled.button`
  width: 6.3rem;
  height: 4.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
  border: 1px solid ${({ theme }) => theme.colors.black};
  transition: 0.3s background-color ease;

  ${({ mini }) => mini && `
      width: 2.4rem;
      height: 2.4rem;
      min-width: fit-content;
      min-height: fit-content;
      padding: 0.1rem 0.5rem;
      font-size: 1.4rem;
  `}

  ${({ noStock }) => noStock && `
    pointer-events: none;
  `}

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
  ${({ swatch, theme, mini }) => swatch &&`
    background: ${swatch};
    border-color: #EEE;
    position: relative;
    width: ${mini ? '1.6rem' : '3.2rem'};
    height: ${mini ? '1.6rem' : '3.2rem'};
    outline-offset: .1rem;

    &:hover{
      background: ${swatch};
      outline: 1px solid ${theme.colors.primary};
    }
  `}

  /* Active Color Attribute Case */
  ${({ swatch, active, theme }) => swatch && active &&`
     outline: 1px solid ${theme.colors.primary};
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

    
  ${({ mini }) => mini && `
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: normal;
  `}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;
