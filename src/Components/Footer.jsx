import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Footer({ pages, setPagination }) {
  const handleChange = (e, v) => {
    setPagination(v);
  };

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      mt={4}
    >
      <Pagination count={pages} variant='outlined' onChange={handleChange} />
    </Stack>
  );
}

export default Footer;
