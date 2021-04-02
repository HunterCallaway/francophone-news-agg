import {NewsSearch} from '../NewsSearch';
const axios = require('axios');

//Calling axios via a `mock` function suppresses its default behavior
//and allows us to substitute test behavior.
jest.mock('axios');

describe('NewsSearch', () => {

    //Success test
    it('fetches data from the NewsAPI', async () => {
        const data = {
            data: {
                articles: [
                    {
                        author: 'Seymour Hersh',
                        title: 'Drone Attacks Exposé',
                        url: 'http://www.lrb.co.uk/hersh-drones'
                    },
                    {
                        author: 'Bethany McLean',
                        title: 'Financial Crimes Exposé',
                        url: 'http://www.ft.com/mclean-financial-crimes'
                    }
                ]
            }
        };
    
        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(NewsSearch()).resolves.toHaveReturned();
    });

    //Error test
    it('throws an error when fetching from the NewsAPI', async () => {
        const errorMessage = '500 Internal Server Error';

        axios.get.mockImplementationOnce(() => 
            Promise.reject(new Error(errorMessage)),
        );

        await expect(NewsSearch()).rejects.toThrow(errorMessage);
    });
    
});


/* import NewsSearch from "../NewsSearch";

it('calls axios and returns articles', async () => {
    const articles = NewsSearch("Macron");
    console.log(articles);
}) */