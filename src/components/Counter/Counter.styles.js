import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .op {
    cursor: pointer;
    ${flexCenter}
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2.6rem;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
    border: 1px solid ${({ theme }) => theme.colors.black};
    transition: 0.5s all ease;

    ${({ mini }) => mini &&`
      width: 2.4rem;
      height: 2.4rem;
      font-size: 1.8rem;
      font-weight: 400;
    `}

    &:hover {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .val {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
