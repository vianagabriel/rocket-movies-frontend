import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-bottom: .8rem;
  border-radius: 1rem;

  input{
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  
  svg {
    margin-left: 1.6rem;
  }
`;