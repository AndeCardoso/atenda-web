import { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

import { Title } from './styles';

export const SectionTitle = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Title>
      <Typography
        color="primary"
        sx={{
          textTransform: 'uppercase',
          fontSize: '32px',
          fontWeight: 700,
        }}
      >
        {children}
      </Typography>
    </Title>
  );
};
