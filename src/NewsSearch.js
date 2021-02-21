import React, {useState, useEffect} from 'react';
import axios from "axios";

const NewsSearch = () => {

    //We initialize the state to an empty array. The state will be populated with
    //a list of articles after we fetch from the News API.
    const [data, setData] = useState([]);

    //`loading` will be initialized to `true` to display a "Loading..." message when the component renders.
    const [loading, setLoading] = useState(true);

    //Since we only need to call the `setError()` function if there is an error,
    //we will initialize `error` to `null`.
    const [error, setError] = useState(null); 

    /*
    NOTE: As of right now, the empty dependency array causes the `useEffect` hook
      to only run when the component mounts. When we add the functionality to toggle between
      Francophone countries, the `country` state variable will need to be passed into the dependency array.
    The `axios` function makes a call to the API.
    The `data` variable's value is then set to the `response` we receive.
    If any errors occur, they will be printed to the console, 
      and the `error` variable's value will be updated.
    Once we either have a response from the API or an error notification,
      we will update the `loading` variable's value to `false`.
    */
    useEffect(() => {

        const getArticles = async () => {

            await axios('http://newsapi.org/v2/top-headlines?country=fr', {
                headers: {
                    'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
                 }
            })
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log("Error: " + error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

        };

        getArticles();

    }, []);

    if (loading) return "Loading...";
    if (error) return "Hmmm... Something went wrong. :(";


    return (
        <ul>
            {data && data.articles.map((article, index) => (
                <li key={index}>{article.title}</li>
            ))}
        </ul>
    );

};

export default NewsSearch;