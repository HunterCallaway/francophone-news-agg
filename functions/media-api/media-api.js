const process = require('process');

const axios = require('axios');

const handler = async (event) => {
  const country = event.queryStringParameters.country || '';

  const { REACT_APP_API_KEY } = process.env;
  const URL = `http://api.mediastack.com/v1/news?access_key=${REACT_APP_API_KEY}&languages=fr&countries=${country}`;

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
