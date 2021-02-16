import React, {useState, useEffect} from 'react';

const NewsSearch = () => {

    const [data, setData] = useState([]);

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