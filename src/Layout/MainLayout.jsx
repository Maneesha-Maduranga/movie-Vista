import { Outlet } from 'react-router-dom';

import { Box, Paper, Grid } from '@mui/material';

//Components
import Navbar from '../Components/Navbar';

function MainLayout() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header"
            
  "main main"`,
          }}
        >
          <Box sx={{ gridArea: 'header', margin: '10px' }}>
            <Navbar />
          </Box>

          <Box sx={{ gridArea: 'main' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
