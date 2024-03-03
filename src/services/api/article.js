import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com';
const API_KEY = import.meta.env.VITE_REACT_APP_ARTICLES_API_KEY;

const getPopularArticles = async (timePeriod) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/svc/mostpopular/v2/viewed/${timePeriod}.json?api-key=${API_KEY}`,
    );

    if (response.status >= 400) {
      throw new Error('Failed to fetch popular articles');
    }

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch popular articles');
  }
};

export default getPopularArticles;
