import { Card, Skeleton, CardContent, Box } from '@mui/material';

function Spinner({ width, height }) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: width,
        height: height,
        flexDirection: 'row',
      }}
    >
      <Skeleton
        variant='rounded'
        sx={{ width: 150, height: 300, alignSelf: 'center' }}
      />
      <CardContent sx={{ m: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Skeleton variant='text' sx={{ fontSize: '3rem', width: 150 }} />
          <Skeleton variant='text' sx={{ fontSize: '1rem', width: 150 }} />
          <Skeleton variant='rounded' width={150} height={90} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Spinner;
