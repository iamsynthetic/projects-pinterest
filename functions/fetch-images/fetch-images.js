const axios = require('axios')

const handler = async (event) => {
  const { keyword, page } = event.queryStringParameters
  const API_KEY = process.env.API_KEY
  const url = `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=10&client_id=${API_KEY}`
  
  try {
    const { data } = await axios.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch(error){
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }
}

module.exports = { handler }