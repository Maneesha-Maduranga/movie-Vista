import { Container, Box } from '@mui/system';

import eror from '../assets/error.png';

function Error() {
  return (
    <>
      <Container maxWidth='sm'>
        <Box sx={{ mx: 'auto', width: '500', my: 15 }}>
          <Box sx={{ fontFamily: 'Poppins', fontSize: '1.6rem' }}>
            We can't find that page
          </Box>
          <Box sx={{ fontFamily: 'Poppins', fontSize: '1rem' }}>
            Try searching again, or return home to start from the beginning.
          </Box>

          <img
            src={eror}
            alt='error'
            style={{ height: '200px', width: '200px', margin: '15px' }}
          />
        </Box>
      </Container>
    </>
  );
}

export default Error;
