import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`;

const Main = (props) => {
  const {className, children} = props;

  return(
    <Container className={className}>
      <main role='main'>
        {children}
      </main>
    </Container>
  );
}

export default Main;