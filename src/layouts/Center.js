import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Center = (props) => {
  const {className, children} = props;

  return(
    <Container className={className}>
      <main role='main'>
        {children}
      </main>
    </Container>
  );
}

export default Center;