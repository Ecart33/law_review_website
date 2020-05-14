import React, { useState, useEffect } from 'react';

import { Layout } from '../Components/Layout';
import { NoteCard } from '../Components/NoteCard';

import { Container } from 'react-bootstrap';

import styled from 'styled-components';

export const Home = () => {
  const [notes, setNotes] = useState<Note[]>([
    { title: 'Test Note', subtitle: 'Essay by Yahiko', url: '/notes/test' }
  ]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch('http://localhost:3333/note/all'),
        json = await res.json();

      setNotes(json);
    };

    // fetchNotes();
  }, []);

  return (
    <>
      <Layout title='Home' />
      <StyledContainer>
        {notes.map((n, i) => (
          <NoteCard title={n.title} key={i} subtitle={n.subtitle} url={n.url} />
        ))}
      </StyledContainer>
    </>
  );
};

type Note = {
  title: string;
  subtitle: string;
  url: string;
};

const StyledContainer = styled(Container)`
  padding: 25px;
`;
