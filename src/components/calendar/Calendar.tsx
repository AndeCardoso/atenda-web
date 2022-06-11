import { useRef, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import * as S from './styles';
import { Paper, Typography, useTheme } from '@mui/material';

export const Calendar = () => {
  const appTheme = useTheme();
  const [events] = useState([{
    allDay: true,
    title: '',
    date: '',
    id: ''
  }]);

  const calendarRef = useRef(null);

  return (
    <Paper elevation={3} sx={{width: '100%'}}>
      <S.FormContainer>
        <S.Title>
          <Typography
            color='primary'
            sx={{
              textTransform: 'uppercase',
              fontSize: '32px',
              fontWeight: 700
            }}
          >
            Cadastrar Agendamento
          </Typography>
        </S.Title>
        <S.Calendar
          color={appTheme.palette.primary.main}
          property={appTheme.palette.secondary.main}
          theme={appTheme.palette.secondary.contrastText}
        >
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            ref={calendarRef}
            events={{events}}
            selectable={true}
            weekends={false}
            locale="pt-br"
            initialView="dayGridMonth"
            eventColor={'#35AB9F'}
          />
        </S.Calendar>
      </S.FormContainer>
    </Paper>
  );
};
