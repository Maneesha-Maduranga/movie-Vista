import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';

//Components
import Spinner from '../Components/Spinner';
import MovieCard from '../Components/MovieCard';

function MovieGrid({ loading, movies }) {
  const localMv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
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
                    popularity={item.popularity}
                  />
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}

export default MovieGrid;
