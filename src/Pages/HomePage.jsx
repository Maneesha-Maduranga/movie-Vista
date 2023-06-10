import { useState } from 'react';

import { Container, Box } from '@mui/material';

//Components
import MovieGrid from '../Components/MovieGrid';
import MovieCarresol from '../Components/MovieCarresol';
import Footer from '../Components/Footer';
import Heading from '../Components/Heading';
import RadioSelection from '../Components/RadioSelection';

//Custom Hooks
import useFetchData from '../Hooks/useFecthData';

function HomePage() {
  const [url, setUrl] = useState('movie/now_playing');
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');

  const handleSelect = (q) => {
    if (q == 'trending') {
      setUrl(`trending/movie/day`);
      setTitle(q);
    } else {
      setUrl(`movie/${q}`);
      setTitle(q);
    }
  };

  const setPagination = (pageNo) => {
    setPage(pageNo);
  };

  const [movies, loading, error, pages] = useFetchData(url, page);

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
      {/* Section Two */}
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box sx={{ mx: 0.5 }}>
            <RadioSelection
              handleSelect={(q) => {
                handleSelect(q);
              }}
            />
          </Box>
        </Box>
      </Container>
      {/* Section Three */}
      <Container>
        <Heading title={title} />
        <MovieGrid loading={loading} movies={movies} />
        <Footer pages={pages} setPagination={(w) => setPagination(w)} />
      </Container>
    </>
  );
}

export default HomePage;
