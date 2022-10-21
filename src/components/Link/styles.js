import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 2.4rem;

    svg{
     font-size: 1.6rem;
     margin-top: .4rem;
    }
  
`;
    