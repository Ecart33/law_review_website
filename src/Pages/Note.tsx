import React, { useState, useEffect } from 'react';

import { Layout } from '../Components/Layout';

import { Container } from 'react-bootstrap';

import styled from 'styled-components';

export const Note = ({ id }: NoteProps) => {
  const [state, setState] = useState<NoteState>({
    title: 'Note'
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/${id}`),
        json = await res.json();

      setState(json);
    };

    // fetchData();
  }, [id]);

  return (
    <>
      <Layout title={state.title}></Layout>
      <StyledContainer></StyledContainer>
    </>
  );
};

type NoteState = {
  title: string;
};

type NoteProps = {
  id: string;
};

const StyledContainer = styled(Container)`
  width: 50%;
`;
