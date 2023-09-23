import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>Hello World</Title>
      <Paragrafo>Chama la Papai</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
