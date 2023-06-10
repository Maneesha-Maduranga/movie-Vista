import { AppBar, Box, Stack, IconButton } from '@mui/material';

import logo from '../assets/logo.png';

function Navbar() {
  return (
    <AppBar>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        m={1}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ alignSelf: 'center' }}>
            <img src={logo} style={{ height: '40px', width: '40px' }} />
          </Box>
          <Box
            variant='h5'
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          >
            MOVIEVISTA
          </Box>
        </Box>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
