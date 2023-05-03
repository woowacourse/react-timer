import styled from 'styled-components';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--green-300);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 18px;
`;

export default Header;
