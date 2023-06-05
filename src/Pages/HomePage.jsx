import MovieCard from '../Components/MovieCard';

import MovieCarresol from '../Components/MovieCarresol';
import { Container, Box, Grid, Typography } from '@mui/material';

import Spinner from '../Components/Spinner';
import useFetchData from '../Hooks/useFecthData';
import Footer from '../Components/Footer';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import popCorn from '../assets/popcorn.png';

function HomePage() {
  const localMv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [page, setPage] = useState(1);

  const setPagination = (pageNo) => {
    setPage(pageNo);
  };

  const [movies, loading, error, pages] = useFetchData('now_playing', page);
  // const arr = useFetchData('now_playing');
  // console.log(arr);

  return (
    <>
      {/* Section One */}
      <Box my={10} mx={5}>
        <Box
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          UpComing Movies
        </Box>
        <MovieCarresol />
      </Box>
      <Container>
        {/* Section Two */}
        <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
          <Box
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Movies in Theatres
          </Box>

          <Box sx={{ alignSelf: 'center' }}>
            <img src={popCorn} style={{ height: '40px', width: '40px' }} />
          </Box>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {loading ? (
            <>
              {localMv.map((item, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <Spinner width={300} height={300} />
                </Grid>
              ))}
            </>
          ) : (
            <>
              {movies.map((item, index) => (
                <Grid item xs={1} sm={4} md={4} key={index}>
                  <Link to={`${item.id}`}>
                    <MovieCard
                      imgPath={item.urlToImage}
                      title={item.title}
                      voteCount={item.vote_count}
                      date={item.release_date}
                      vote={item.vote_average}
                      img={item.poster_path}
                    />
                  </Link>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
      <Footer pages={pages} setPagination={(w) => setPagination(w)} />
    </>
  );
}

export default HomePage;
