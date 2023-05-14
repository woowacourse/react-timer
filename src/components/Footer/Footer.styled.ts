import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  margin-top: auto;
  padding: 0 46px;
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  color: ${({ isActive }) => (isActive ? '#b52c45' : '#333')};
`;
