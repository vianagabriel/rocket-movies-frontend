import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;


export const Section = styled.section`
  max-width: 113.7rem;
  height: 40rem;
  margin: 3rem 12.3rem;
  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 1rem;
    height: 10vh;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
  margin: 3rem 12.3rem;

    h2{
     font-weight: 400;
     font-size: 3.2rem;
  }
`;

export const ButtonAdd = styled.div`
  height: 4.8rem;
  width: 20.7rem;
`;
  

