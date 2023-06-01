import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Footer() {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      mt={4}
    >
      <Pagination count={5} variant='outlined' />
    </Stack>
  );
}

export default Footer;
