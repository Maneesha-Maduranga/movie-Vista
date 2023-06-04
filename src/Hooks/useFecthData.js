import { useEffect, useState } from 'react';
import { apiService } from '../Services/api';

function useFetchData(url) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchMovie() {
    try {
      const {
        data: { results },
      } = await apiService.get(url);
      console.log(results);

      setMovies(results);
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

export default useFetchData;
