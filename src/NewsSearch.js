import React, {useState, useEffect} from 'react';

const NewsSearch = () => {

    //We initialize the state to an empty array. The state will be populated with
    //a list of articles after we fetch from the News API.
    const [data, setData] = useState([]);

    /*
    NOTE: As of right now, the empty dependency array causes the `useEffect` hook
      to only run when the component mounts. When we add the functionality to toggle between
      Francophone countries, the `country` state variable will need to be passed into the dependency array.
    The `fetch` function makes a call to the API.
    The `response` is converted to JSON, and the `data` variable's value is then set to the JSON object.
    If any errors occur, they will be printed to the console.
    */
    useEffect(() => {

        const getArticles = () => {

            fetch('http://newsapi.org/v2/top-headlines?country=fr', {
                headers: {
                    'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
                 }
            })
            .then(response => {
                return response.json();
            })
            .then(newJson => {
                    setData(newJson);
            })
            .catch(error => {
                console.log("Error: " + error);
            });

        };

        getArticles();

    }, []);


    return (
        <ul>
            {data.articles.map((article, index) => (
                <li key={index}>{article.title}</li>
            ))}
        </ul>
    );

};

export default NewsSearch;