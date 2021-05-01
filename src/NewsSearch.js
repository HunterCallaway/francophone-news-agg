import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  CardDeck, Card, Container, Row, Col,
} from 'react-bootstrap';
import { CountryContext } from './CountryContext';

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
    NOTE: As of right now, the empty dependency array causes the `useEffect` hook
      to only run when the component mounts. When we add the functionality to toggle between
      Francophone countries, the `country` state variable
      will need to be passed into the dependency array.
    The `axios` function makes a call to the API.
    The `data` variable's value is then set to the `response` we receive.
    If any errors occur, they will be printed to the console,
      and the `error` variable's value will be updated.
    Once we either have a response from the API or an error notification,
      we will update the `loading` variable's value to `false`.
    */

  useEffect(() => {
    const getArticles = async () => {
      await axios.get(country, {
        headers: {
          'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY,
        },
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((catchError) => {
          console.log(`Error: ${catchError}`);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getArticles();
  }, [country, error]);

  if (loading) return 'Loading...';
  if (error) return 'Hmmm... Something went wrong. :(';

  return (
    <Container>
      <Row>
        {data && data.articles.map((article) => (
          <Col xs={12} md={6} lg={3}>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    {article.description}
                    {article.author}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"><a href="article.url">Article ici</a></small>
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
