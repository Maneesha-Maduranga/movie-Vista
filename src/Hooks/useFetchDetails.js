import { useEffect, useState } from 'react';
import { apiService } from '../Services/api';

function useFetchDetails(url) {
  const [movies, setMovies] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchMovie() {
    try {
      const { data } = await apiService.get(url);

      setMovies(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return [movies, loading, error];
}

export default useFetchDetails;
