import { useState, useEffect } from 'react';
import getPopularArticles from '../services/api/article';

const useGetPopularArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await getPopularArticles(1);
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
