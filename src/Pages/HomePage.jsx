import MovieCard from '../Components/MovieCard';

import MovieCarresol from '../Components/MovieCarresol';
import { Container, Box, Grid } from '@mui/material';

import Spinner from '../Components/Spinner';
import useFetchData from '../Hooks/useFecthData';

function HomePage() {
  const localMv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [movies, loading] = useFetchData('now_playing');

  return (
    <>
      {/* Section One */}
      <Box my={10}>
        <MovieCarresol />
      </Box>
      <Container>
        {/* Section Two */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {loading ? (
            <>
              {localMv.map((item, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <Spinner />
                </Grid>
              ))}
            </>
          ) : (
            <>
              {movies.map((item, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <MovieCard
                    imgPath={item.urlToImage}
                    title={item.title}
                    description={item.overview}
                    date={item.release_date}
                    vote={item.vote_average}
                    img={item.poster_path}
                  />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
