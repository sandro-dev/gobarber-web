import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong> 07 de Janeiro</strong>
        <button type="button">
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
