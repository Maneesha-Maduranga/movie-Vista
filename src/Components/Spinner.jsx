import { Card, Skeleton, CardContent, Box } from '@mui/material';

function Spinner({ width, height }) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: width,
        height: height,
        flexDirection: 'column',
      }}
    >
      <Skeleton
        variant='rounded'
        sx={{ width: 300, height: 350, alignSelf: 'flex-start' }}
      />
      <CardContent sx={{ m: 1 }}>
        <Box>
          <Box>
            <Skeleton variant='text' sx={{ fontSize: '1rem', width: 150 }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Skeleton variant='text' sx={{ fontSize: '1rem', width: 150 }} />
            <Skeleton variant='text' sx={{ fontSize: '1rem', width: 150 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Spinner;
