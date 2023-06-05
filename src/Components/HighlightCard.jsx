import { Card, Typography, CardMedia, Rating } from '@mui/material';
import { Box } from '@mui/system';

function HighlightCard({ img, vote, title, date }) {
  return (
    <Card
      sx={{
        display: 'flex',

        width: { xs: 140, sm: 200 },
        flexDirection: 'column',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component='img'
        sx={{
          width: { xs: 120, sm: 180 },

          alignSelf: 'center',
        }}
        image={`https://image.tmdb.org/t/p/w200/${img}`}
        alt={title}
      />

      <Box sx={{ alignSelf: 'center', p: 1 }}>
        <Box
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Box>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Rating
          name='size-small'
          defaultValue={2}
          value={vote}
          size='small'
          readOnly
          max={10}
        />
      </Box>
    </Card>
  );
}

export default HighlightCard;
