import React, {useEffect} from 'react';

const NewsSearch = () => {

    useEffect(() => {

        const url = 'https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?lang=fr&token=' + process.env.REACT_APP_NEWS_API_KEY;
        //const req = new Request(url);
        fetch(url, {
            headers: {
                
            }
        })
        .then(response => response.json())
        .then(response =>{
            console.log(response);
        })

    }, []);

    return (
        <div>

        </div>
    );

};

export default NewsSearch;