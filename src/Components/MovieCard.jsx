import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

function MovieCard({ imgPath, title, author, date }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' alt={author} height='180' image={imgPath} />
      <CardContent>
        <Typography variant='body1'>{title}</Typography>
      </CardContent>

      <Button size='small'>Read More</Button>
    </Card>
  );
}

export default MovieCard;
