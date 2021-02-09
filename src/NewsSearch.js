import React, {useEffect} from 'react';

const NewsSearch = () => {

    useEffect(() => {

        const url = 'http://newsapi.org/v2/top-headlines?country=fr';
        const req = new Request(url, {
            headers: {
                'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
            }
        });
        fetch(req)
        .then(response => response.json())
        .then(response =>{
            console.log(response);
        })
        .catch(error => {
            console.log('Error: ', error);
        });

    }, []);

    return (
        <div>

        </div>
    );

};

export default NewsSearch;