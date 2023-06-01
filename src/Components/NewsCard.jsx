import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

import { BiTime } from 'react-icons/bi';

function NewsCard({ imgPath, title, author, date }) {
  function dateFormat(date) {
    let dates = date.replace('T', '  ');
    let nwDt = dates.split(' ');
    return nwDt[0];
  }

  let day = dateFormat(date);

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

export default NewsCard;
