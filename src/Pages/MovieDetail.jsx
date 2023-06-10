import { Container, Box } from '@mui/system';
import BreadNavigation from '../Components/BreadNavigation';

import { useParams } from 'react-router-dom';
import useFetchDetails from '../Hooks/useFetchDetails';
import { Card, CardMedia, Divider } from '@mui/material';

import { BiTimeFive, BiDollarCircle, BiHeart } from 'react-icons/bi';

import { GiTomato } from 'react-icons/gi';
import Loading from '../Components/Loading';

function MovieDetail() {
  const { id } = useParams();

  const [movies, loading, error] = useFetchDetails(`movie/${id}`);

  return (
    <>
      <Box sx={{ mt: 10 }}>
        <BreadNavigation name='Home' />
        {error ? (
          <h1>error</h1>
        ) : (
          <Container sx={{ mt: 3 }}>
            {loading ? (
              <Box sx={{ mx: 'auto', width: 400 }}>
                <Loading />
              </Box>
            ) : (
              <Box>
                {/* DeskTop View */}

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridAutoColumns: '1fr',
                      gap: 1,
                    }}
                  >
                    {/* Display Image */}
                    <Box
                      sx={{
                        gridRow: '1',
                        gridColumn: 'span 1',
                      }}
                    >
                      <Card
                        sx={{
                          width: 300,
                        }}
                      >
                        <CardMedia
                          component='img'
                          image={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                          alt='Live from space album cover'
                        />
                      </Card>
                    </Box>

                    {/* Display details OF Films */}
                    <Box
                      sx={{
                        gridRow: '1',
                        gridColumn: 'span 2',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                        }}
                      >
                        {/* Movie Head Title */}
                        <Box sx={{ fontFamily: 'Poppins', fontSize: '1.6rem' }}>
                          {movies.title}
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Box
                            sx={{
                              fontFamily: 'Poppins',
                              fontSize: '1.2rem',
                            }}
                          >
                            {movies.release_date}
                          </Box>
                          <Box
                            sx={{
                              fontFamily: 'Poppins',
                              fontSize: '1.2rem',
                              mx: 2,
                              alignSelf: 'center',
                            }}
                          >
                            <BiTimeFive /> {movies.runtime} Min
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem',
                          }}
                        >
                          <Box sx={{ color: '#ffeb3b' }}>Budget</Box>
                          <BiDollarCircle /> {movies.budget}
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Box
                            sx={{
                              fontFamily: 'Poppins',
                              fontSize: '1.2rem',

                              alignSelf: 'center',
                            }}
                          >
                            <GiTomato /> {movies.vote_average}
                          </Box>

                          <Box
                            sx={{
                              fontFamily: 'Poppins',
                              fontSize: '1.2rem',
                              mx: 2,
                              alignSelf: 'center',
                            }}
                          >
                            <BiHeart /> {movies.vote_count}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            fontFamily: 'Poppins',
                          }}
                        >
                          <Box
                            sx={{ display: 'flex', flexDirection: 'column' }}
                          >
                            <Box sx={{ color: '#ffeb3b' }}>Genres</Box>

                            {movies.genres.map((item) => {
                              return (
                                <Box key={item.id} sx={{ mx: 0.2 }}>
                                  {item.name}
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>
                        <Box sx={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
                          {movies.overview}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Mobile View */}
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        gridColumn: '1',
                        gridRow: 'span 1',
                      }}
                    >
                      <Card>
                        <CardMedia
                          component='img'
                          image={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                          alt='Live from space album cover'
                        />
                      </Card>
                    </Box>
                    {/* The second non-visible column has width of 1/4 */}
                    <Box
                      sx={{
                        gridColumn: '1',
                        gridRow: 'span 2',
                        p: 2,
                      }}
                    >
                      <Box
                        sx={{
                          fontFamily: 'Poppins',
                          fontSize: '1.6rem',
                          my: 1,
                        }}
                      >
                        {movies.title}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          my: 1,
                        }}
                      >
                        <Box
                          sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.2rem',
                          }}
                        >
                          {movies.release_date}
                        </Box>
                        <Box
                          sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.2rem',
                            mx: 2,
                            alignSelf: 'center',
                          }}
                        >
                          <BiTimeFive /> {movies.runtime} Min
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          fontFamily: 'Poppins',
                          fontSize: '1rem',
                          my: 1,
                        }}
                      >
                        <BiDollarCircle /> {movies.budget}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.2rem',

                            alignSelf: 'center',
                          }}
                        >
                          <GiTomato /> {movies.vote_average}
                        </Box>

                        <Box
                          sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.2rem',
                            mx: 2,
                            alignSelf: 'center',
                          }}
                        >
                          <BiHeart /> {movies.vote_count}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          fontFamily: 'Poppins',
                          my: 1,
                        }}
                      >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          Genres
                          {movies.genres.map((item) => {
                            return (
                              <Box key={item.id} sx={{ mx: 0.2 }}>
                                {item.name}
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                      <Box sx={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
                        {movies.overview}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Container>
        )}
      </Box>
    </>
  );
}

export default MovieDetail;
