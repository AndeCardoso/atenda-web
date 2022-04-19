import { useRef, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './styleCalendar.css';
// import interactionPlugin from '@fullcalendar/interaction';

import * as S from './styled';

export const Calendar = () => {
  const [events, setEvents] = useState([{
    allDay: true,
    title: '',
    date: '',
    id: ''
  }]);

  const calendarRef = useRef(null);

  return (
    <S.FormContainer>
      <S.Title>Agenda de Atendimento</S.Title>
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
    </S.FormContainer>
  );
};
