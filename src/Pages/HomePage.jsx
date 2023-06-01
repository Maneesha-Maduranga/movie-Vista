import NewsCard from '../Components/NewsCard';
import HighlightCard from '../Components/HighlightCard';
import NewsCarrosal from '../Components/NewsCarrosal';
import { Container, Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import { apiService } from '../Services/api';

function HomePage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  const fetchNews = async () => {
    const { data } = await apiService.get();
    const { articles } = data;
    console.log(articles);
    setNews(articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container>
      {/* Section One */}

      {/* Section Two */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {news.map((item, index) => (
          <Grid item xs={1} sm={4} md={4} key={index}>
            <NewsCard
              imgPath={item.urlToImage}
              title={item.title}
              author={item.author}
              date={item.publishedAt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
