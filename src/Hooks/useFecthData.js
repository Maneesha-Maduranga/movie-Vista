import { useEffect, useState } from 'react';

import { apiService } from '../Services/api';

function useFetchData(url, page) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);

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
      setLoading(false);
      throw new Response('Not Found', { status: 404 });
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [url, page]);

  return [movies, loading, error, pages];
}

export default useFetchData;
