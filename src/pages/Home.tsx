import { useState } from 'react';
import { Button, InputLabel, OutlinedInput } from '@mui/material';
import Container from '@mui/material/Container';
import { useAppThemeContext } from 'shared/context/ThemeContext';

export const Home = () => {
  const [name, setName] = useState('teset');

  const { toggleTheme } = useAppThemeContext();

  return (
    <Container>
      <InputLabel htmlFor='nome'>Nome</InputLabel>
      <OutlinedInput placeholder='Ex.: Maria' name='nome' />

      <Button variant='contained' onClick={toggleTheme}>Mudar Tema</Button>
    </Container>
  );
};