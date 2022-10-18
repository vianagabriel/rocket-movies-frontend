import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem 3.2rem 4rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  margin-bottom: 2.4rem;

  h2{
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: .8rem;
    line-height: 3.2rem;
  }

  p{
    text-align: justify;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_PARAGRAPH};
    margin-bottom: 2rem;
  }

  footer {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 30px;
    display: flex;
    gap: .8rem;
  }
`;