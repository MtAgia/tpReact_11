import { Container } from 'react-bootstrap';
import './App.css'
import Footer from './componets/footer';
//import CardPrin from './componets/CardPrin';
import { useState, useEffect } from 'react';
import CardMap from './componets/CardMap';
import { Form } from 'react-bootstrap';

function App() {
  const [diario, setDiario] = useState([]);
  
  useEffect(() => {
    consultar();
  }, []);
  
  const consultar = async (noticia) => {
  try {
      //peticion GET
      // no seguir con esta tipologia ayudarme un poco con el otro repo de git
    let respuesta = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_241362922009360215a2e1fe74534f6c34328&q=noticia"
    );
    let info = await respuesta.json()
    console.log(info)
    setDiario(info.results);

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <h2 className="py-4 border border-black text-center">Noticias</h2>

      <Container className="py-4 my-4 main border border-black">
        <div className="py-2 justify-content-evenly border border-black d-flex ">
          <h5>Seleccione: </h5>
          <Form.Select aria-label="Default select example">
            <option>Opciones</option>
            <option>Variadas</option>
          </Form.Select>
        </div>

        <CardMap diario={diario}></CardMap>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
