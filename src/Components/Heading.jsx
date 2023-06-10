import { Container, Box } from '@mui/material';
import popCorn from '../assets/popcorn.png';
import star from '../assets/star.png';
import heart from '../assets/heart.png';
import trending from '../assets/trending.png';

function Heading({ title }) {
  let heading;
  let image;

  if (title == 'top_rated') {
    heading = 'Top Rated Movies';
    image = star;
  } else if (title == 'trending') {
    heading = 'Trending Movies';
    image = trending;
  } else if (title == 'popular') {
    heading = 'Popular Movies';
    image = heart;
  } else {
    heading = 'Movies In Theatres';
    image = popCorn;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
      <Box
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: '1.5rem',
        }}
      >
        {title ? heading : 'Movies In Theatres'}
      </Box>

      <Box sx={{ alignSelf: 'center' }}>
        {}
        <img
          src={image}
          style={{ height: '40px', width: '40px', margin: '15px' }}
        />
      </Box>
    </Box>
  );
}

export default Heading;
