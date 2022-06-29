import React from 'react';

const Container = styled.div`

`;

const Footer = (props) => {
  const {className} = props;

  return(
    <Container className={className}>
      <header>Footer</header>
    </Container>
  );
}

export default Footer;