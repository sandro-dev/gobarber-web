import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Time } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  function handleAddDays() {
    setDate(addDays(date, 1));
  }

  function handleSubDays() {
    setDate(subDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleSubDays}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleAddDays}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Sandro Santos</span>
        </Time>

        <Time available>
          <strong>09:00</strong>
          <span>Sandro Santos</span>
        </Time>

        <Time>
          <strong>10:00</strong>
          <span>Sandro Santos</span>
        </Time>

        <Time>
          <strong>11:00</strong>
          <span>Sandro Santos</span>
        </Time>
      </ul>
    </Container>
  );
}
