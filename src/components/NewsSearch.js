import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  CardDeck, Card, Container, Row, Col,
} from 'react-bootstrap';
import { CountryContext } from '../context/CountryContext';
import newspapers from '../resources/newspapers.jpeg';

// This function changes the `src` to the default image
// if there is any error.
const addErrorSrc = (ev) => {
  ev.currentTarget.src = newspapers; // eslint-disable-line no-param-reassign
};

const NewsSearch = () => {
  // We initialize the state to an empty array. The state will be populated with
  // a list of articles after we fetch from the News API.
  const [data, setData] = useState([]);

  // `loading` will be initialized to `true` to display a "Loading..."
  // message when the component renders.
  const [loading, setLoading] = useState(true);

  // Since we only need to call the `setError()` function if there is an error,
  // we will initialize `error` to `null`.
  const [error, setError] = useState(null);

  // Importing the `country` state variable from CountryContext
  // allows us to have a default endpoint when the component mounts
  // and gives the user the option to rerender the component
  // with news from other Francophone countries.
  const countryContext = useContext(CountryContext);
  const { country } = countryContext;

  /*
    The `axios` function makes a call to the API.
    The `data` variable's value is then set to the `response` we receive.
    If any errors occur, they will be printed to the console,
      and the `error` variable's value will be updated to `true`.
    Once we either have a response from the API or an error notification,
      we will update the `loading` variable's value to `false`.
    */

  const getArticles = async () => {
    try {
      await axios.get(country)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        });
    } catch (catchError) {
      console.log(`Error: ${catchError}`);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, error]);

  if (loading) return <div className="d-flex align-items-center justify-content-center py-5 font-loading"><h1>Veuillez Patienter...</h1></div>;
  if (error) return <div className="d-flex align-items-center justify-content-center py-5 font-error"><h1>Désolé, il y a eu une erreur. :(</h1></div>;

  return (
    <Container>
      <Row>
        {data && data.data.slice(0, 21).map((article) => (
          <Col xs={12} md={6} lg={4} className="d-flex" key={article.url}>
            <CardDeck className="py-3">
              <Card className="font-card card-background border-secondary">
                <Card.Img variant="top" src={article.image} onError={addErrorSrc} alt={article.title} />
                <Card.Body className="d-flex flex-column justify-content-center text-center">
                  <Card.Title className="font-card">
                    {article.title.length > 50
                      ? `${article.title.substring(0, 50)}...`
                      : article.title}
                  </Card.Title>
                  <Card.Text>
                    {article.description && article.description.length > 75
                      ? `${article.description.substring(0, 75)}...`
                      : article.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="footer-color border-secondary text-center">
                  <a href={article.url} target="_blank" className="link-color" rel="noreferrer">Article ici</a>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsSearch;
