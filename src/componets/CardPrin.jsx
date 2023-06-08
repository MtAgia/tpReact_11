import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardPrin = ({diario}) => {
    return (
      <>
        <article className=" col-lg-3 col-md-6 my-1 col-sm-12">
          <Card className='' style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://th.bing.com/th/id/R.2350a6447da01383a559380486e31128?rik=weB6Ixv2WCHrow&riu=http%3a%2f%2fdefinicionyque.es%2fwp-content%2fuploads%2f2017%2f05%2fDiario.jpg&ehk=iGXZIexxcZDjIkw0bgIhhEU6sIhuowAfpLJbctpZnUI%3d&risl=&pid=ImgRaw&r=0"
            />
            <Card.Body>
              <Card.Title>{diario.title}</Card.Title>
              <Card.Text>{diario.description}</Card.Text>
              <Button variant="primary" href={diario.link}>
                Noticia
              </Button>
            </Card.Body>
          </Card>
        </article>
      </>
    );
};

export default CardPrin;