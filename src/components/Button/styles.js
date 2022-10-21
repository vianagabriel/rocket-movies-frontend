import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  border: none;
  border-radius: 1rem;
  color: ${({ theme, isDark }) => isDark ? theme.COLORS.PINK : theme.COLORS.GRAY_500};
  background-color: ${({ theme, isDark }) => isDark ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};

  font-size: 16px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

`;
