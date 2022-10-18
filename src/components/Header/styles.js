
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  padding: 0 12.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    color: ${({ theme }) => theme.COLORS.PINK};
 
  }

`;

export const InputContainer = styled.div`
 width: 63rem;
 height: 5.6rem;

`;
  
export const AreaLogout = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;


  div{
    display: flex;
    flex-direction: column;

    p{
      font-weight: 700;
    }

    span{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      cursor: pointer;
      font-weight: 400;
    }
  }

  img{
    width: 6.4rem;
    border-radius: 9999px;

  }
`;