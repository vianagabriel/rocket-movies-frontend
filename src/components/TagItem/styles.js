import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme , isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme  }) => theme.COLORS.GRAY_300};
  border: ${({ theme , isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};
  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  input{
    height: 5.6rem;
    padding: 1.5rem;
    color:  ${({ theme  }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    font-size: 1.5rem;

    &::placeholder{
      color: ${({ theme  }) => theme.COLORS.GRAY_300};
    }
  }

  button{
    border: none;
    background: none;
    padding-top: .5rem;

    svg{
      color: ${({ theme  }) => theme.COLORS.PINK};
    }
  }

  .button-delete{
   width: 130px;
  }

  .button-add{
    width: 180px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

`;