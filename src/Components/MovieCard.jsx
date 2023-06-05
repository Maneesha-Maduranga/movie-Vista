import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, Rating, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import { BsHeart } from 'react-icons/bs';

function MovieCard({ img, title, voteCount, date, vote }) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: 300,

        flexDirection: 'column',
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
        <Box sx={{ mt: 2 }}>
          <Tooltip title='Vote Count'>
            <Badge badgeContent={voteCount} color='primary'>
              <BsHeart color='action' size={22} />
            </Badge>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
