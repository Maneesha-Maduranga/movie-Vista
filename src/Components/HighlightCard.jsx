import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function HighlightCard({ width }) {
  return (
    <Box
      sx={{
        width: { width },
        backgroundColor: 'red',
        padding: '10px',
        position: 'relative',
      }}
    >
      <Box></Box>
      <img
        src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        alt=''
        style={{ width: '100%' }}
      />
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: '180px',
          padding: '10px',
        }}
      >
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          saepe! Nam officiis et ex provident quisquam earum veritatis odit
          nulla.
        </Typography>
      </Box>
    </Box>
  );
}

export default HighlightCard;
