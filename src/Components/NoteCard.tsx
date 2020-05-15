import React from 'react';

import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

import styled from 'styled-components';

export const NoteCard = ({ title, subtitle, url }: NoteCardProps) => (
  <>
    <StyledCard>
      <Card.Body>
        <Card.Title>
          <Link to={url}>{title}</Link>
        </Card.Title>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
    </StyledCard>
  </>
);

type NoteCardProps = {
  title: string;
  subtitle: string;
  url: string;
};

const StyledCard = styled(Card)`
  width: 20%;
`;
