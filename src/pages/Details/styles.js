import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  margin-inline: 12.3rem;
  padding-top: 4rem;



`;

export const Content = styled.div`
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

  .nameAndRating{
    display: flex;
    align-items: center;
    gap: 1.9rem;


    h2{
      font-weight: 500;
      font-size: 3.6rem;
      margin-top: -.8rem;
    }
  }

  div{
    margin-top: 4rem;
    display: flex;
    gap: .8rem;
    margin-bottom: 4rem;
  }

  p{
    text-align: justify;
  }
`;

export const Infos = styled.div`
 display: flex;
 align-items: center;
 gap: .8rem;
 margin-top: 2.4rem;

 img{
  width: 2rem;
  border-radius: 999px;
 }

 span{
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 1.6rem;

}

svg{
  color:${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
 
}

`;

