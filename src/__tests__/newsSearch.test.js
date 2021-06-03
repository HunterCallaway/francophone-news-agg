import NewsSearch from '../NewsSearch';

const axios = require('axios');

// Calling axios via a `mock` function suppresses its default behavior
// and allows us to substitute test behavior.
jest.mock('axios');

describe('NewsSearch', () => {
  // Success test
  it('fetches data from the NewsAPI', async () => {
    const data = {
      data: {
        articles: [
          {
            author: 'Sam Newsman',
            title: 'Local School Board Controversy',
            url: 'http://www.yourlocalnews.com/school-board-controversy',
          },
          {
            author: 'Samantha Reporter',
            title: 'Financial Crimes Exposé',
            url: 'http://www.nationalnews.com/financial-crimes',
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(NewsSearch(data.articles)).resolves.toHaveProperty('author', 'Sam Newsman');
  });

  // Error test
  it('throws an error when fetching from the NewsAPI', async () => {
    const errorMessage = '500 Internal Server Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(NewsSearch()).rejects.toThrow(errorMessage);
  });
});
