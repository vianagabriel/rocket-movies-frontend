import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
`;

export const Main = styled.main`
  margin-inline: 12.3rem;
  padding-top: 4rem;

  a{
    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 2.4rem;

    svg{
     font-size: 1.6rem;
     margin-top: .4rem;
    }
  }
  
  
`;

export const Content = styled.section`
 max-width: 113.7rem;
 height: 40rem;
 overflow-y: scroll;
 padding-inline: 1rem ;

  ::-webkit-scrollbar{
    width: 1rem;
    height: 10vh;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;
  }


  h2{
    font-weight: 500;
    font-size: 3.6rem;
  }

  h3{
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_PARAGRAPH};
    margin-top: 4rem;
   
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-block: 4rem;
  
`;

export const Box = styled.div`
 width: 100%;
 height: 8.8rem;
 background-color: ${( { theme }) => theme.COLORS.BACKGROUND_900};
 border-radius: .8rem;
 margin-top: 2.4rem;
`;
