import React from 'react';

const Container = styled.div`

`;

const Header = (props) => {
  const {className} = props;

  return(
    <Container className={className}>
      <header>HEADER</header>
    </Container>
  );
}

export default Header;