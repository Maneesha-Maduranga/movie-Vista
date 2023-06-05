import { Card, Typography, CardMedia, Rating } from '@mui/material';
import { Box } from '@mui/system';

function HighlightCard({ img, vote, title, date }) {
  return (
    <Card
      sx={{
        display: 'flex',
        height: { xs: 350, sm: 350 },
        width: { xs: 140, sm: 200 },
        flexDirection: 'column',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component='img'
        sx={{
          width: { xs: 120, sm: 180 },
          height: { xs: 290, sm: 300 },
          alignSelf: 'center',
        }}
        image={`https://image.tmdb.org/t/p/w200/${img}`}
        alt='Live from space album cover'
      />

      <Box sx={{ alignSelf: 'center', p: 1 }}>
        <Typography variant='overline' display='block' fontWeight='bold'>
          {title}
        </Typography>
      </Box>
    </Card>
  );
}

export default HighlightCard;
