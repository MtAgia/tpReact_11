import React from 'react';
import CardPrin from './CardPrin';
import { CardGroup } from 'react-bootstrap';

const cardMap = ({diario}) => {
    return (
      <>
        <CardGroup className="col-12 d-flex justify-content-evenly">
          {diario.map((diario, i) => (
            <CardPrin diario={diario} key={i} />
          ))}
        </CardGroup>
      </>
    );
};

export default cardMap;