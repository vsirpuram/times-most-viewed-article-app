import { useState, useEffect } from 'react';
import getPopularArticles from '../services/api/article';

const DEFAULT_TIME_PERIOD_OF_ARTICLES = 1;

const useGetPopularArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await getPopularArticles(DEFAULT_TIME_PERIOD_OF_ARTICLES);
        setArticles(response);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, []);

  return [articles, isLoading];
};

export default useGetPopularArticles;
