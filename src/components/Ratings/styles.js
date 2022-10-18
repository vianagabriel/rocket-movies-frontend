import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span{
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  svg{
    width: 1.7rem;
    height: 1.7rem;
  }
`; 