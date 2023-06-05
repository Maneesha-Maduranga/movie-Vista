import { useEffect, useState } from 'react';
import { apiService } from '../Services/api';

function useFetchData(url, page) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);

  // console.log(page, url);

  async function fetchMovie() {
    try {
      const {
        data: { results, total_pages },
      } = await apiService.get(url, {
        params: {
          page: page,
        },
      });

      setMovies(results);
      setLoading(false);
      setPages(total_pages);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [page]);

  return [movies, loading, error, pages];
}

export default useFetchData;
