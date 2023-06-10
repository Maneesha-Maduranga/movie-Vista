import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Box, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import { BsHeart, BsStar } from 'react-icons/bs';

function MovieCard({ img, title, voteCount, date, vote, popularity }) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: 290,
        transition: 'transform 0.9s ease-in-out',
        flexDirection: 'column',
        ':hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 300, height: 350, alignSelf: 'flex-start' }}
        image={`https://image.tmdb.org/t/p/w1280/${img}`}
        alt='Live from space album cover'
      />
      <CardContent>
        <Box
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {title}
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'light',
              fontSize: '0.8rem',
            }}
          >
            Rating
          </Box>
          <Box
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'light',
              fontSize: '0.8rem',
            }}
          >
            Release Date
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            {vote}/10
          </Box>
          <Box
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            {date}
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            mt: 2,
            flexDirection: 'row',
            gap: 4,
          }}
        >
          <Tooltip title='Vote Count'>
            <Badge badgeContent={voteCount} color='primary' max={5000}>
              <BsHeart color='action' size={22} />
            </Badge>
          </Tooltip>
          <Tooltip title='Popularity'>
            <Badge
              badgeContent={popularity.toFixed()}
              color='primary'
              max={5000}
            >
              <BsStar color='action' size={22} />
            </Badge>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
