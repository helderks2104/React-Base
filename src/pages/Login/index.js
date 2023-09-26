import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const reponse = await axios.get('/users');
      const { data } = reponse;
      // eslint-disable-next-line no-console
      console.log(data);
    }

    getData();
  }, []);
  return (
    <Container>
      <Title>Hello World</Title>
      <Paragrafo>Chama la Papai</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
