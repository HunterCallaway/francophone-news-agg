import React from 'react';
import {
  render, waitFor, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsSearch from '../NewsSearch';
import { CountryProvider } from '../CountryContext';

const axios = require('axios');

// Calling axios via a `mock` function suppresses its default behavior
// and allows us to substitute test behavior.
jest.mock('axios');

// The `cleanup` method from React Testing Library unmounts the React
// trees that were mounted with the `render` method.
afterEach(cleanup);

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

    /*
    We use the mocked axios call with a `mockResolvedValueOnce` method
    to resolve the `data` value we pass into it.
    We then render the NewsSearch component with the CountryContext and
    set the object equal to the `getByText` React Testing Library query.
    Finally, we use the async method `waitFor` to wait for the API call to finish
    and test whether the value we expected was found in the rendered object.
    */
    axios.get.mockResolvedValueOnce(data);
    const { getByText } = render(<CountryProvider><NewsSearch /></CountryProvider>);
    await waitFor(() => {
      // eslint-disable-next-line jest/valid-expect
      expect(getByText('Financial Crimes Exposé'));
    });
  });

  // Error test
  it('throws an error when fetching from the NewsAPI', async () => {
    /*
    The mocked axios call is chained to the `mockRejectedValue` method,
    which will cause the async function to be rejected.
    We then render the NewsSearch component with the CountryContext and
    set the object equal to the `getByText` React Testing Library query.
    Finally, we use the async method `waitFor` to wait for the rejected API call to finish
    and test whether the <div> with the text 'Désolé, il y a eu une erreur. :('
    was found in the rendered document.
    */
    axios.get.mockRejectedValue('Network Error');
    const { getByText } = render(<CountryProvider><NewsSearch /></CountryProvider>);
    await waitFor(() => {
      expect(getByText('Désolé, il y a eu une erreur. :(')).toBeInTheDocument();
    });
  });
});
