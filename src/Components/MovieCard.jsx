import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack, Rating } from '@mui/material';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';

import { BsHeart } from 'react-icons/bs';

function MovieCard({ img, title, description, date, vote }) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: 350,
        height: 300,
        flexDirection: 'row',
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 150, height: 300, alignSelf: 'center' }}
        image={`https://image.tmdb.org/t/p/w1280/${img}`}
        alt='Live from space album cover'
      />
      <CardContent sx={{ m: 1 }}>
        <Box
          sx={{
            display: 'flex',

            flexDirection: 'column',
          }}
        >
          <Typography variant='h5' gutterBottom>
            {title}
          </Typography>
          <Typography
            variant='caption'
            display='block'
            gutterBottom
            color='text.secondary'
          >
            {date}
            <Divider orientation='vertical' flexItem />
          </Typography>

          <Rating name='size-small' defaultValue={vote} size='small' max={8} />
          <Box component='div' sx={{ overflow: 'auto' }}>
            {description}
          </Box>

          <Button
            size='small'
            sx={{
              color: '#f9a825',
              alignSelf: 'flex-end',
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
