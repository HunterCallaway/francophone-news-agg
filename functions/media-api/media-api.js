const process = require('process');

const axios = require('axios');

const handler = async (event) => {
  // apply our function to the queryStringParameters and assign it to a variable
  // const API_PARAMS = qs.stringify(event.queryStringParameters);
  const country = event.queryStringParameters;
  console.log('API_PARAMS', country);
  // Get env var values defined in our Netlify site UI

  // TODO: customize your URL and API keys set in the Netlify Dashboard
  // this is secret too, your frontend won't see this
  const { REACT_APP_API_KEY } = process.env;
  const URL = `http://api.mediastack.com/v1/news?access_key=${REACT_APP_API_KEY}&languages=fr` || `http://api.mediastack.com/v1/news?access_key=${REACT_APP_API_KEY}&languages=fr&countries=${country}`;

  try {
    const { data } = await axios.get(URL);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const {
      status, statusText, headers, data,
    } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({
        status, statusText, headers, data,
      }),
    };
  }
};

module.exports = { handler };
