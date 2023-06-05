import { Outlet } from 'react-router-dom';

import { Box, Paper, Grid } from '@mui/material';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import SerachBar from '../Components/SearchBar';

function MainLayout() {
  const getText = (txt) => {
    console.log(txt);
  };

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
            <Navbar
              getSearch={(txt) => {
                getText(txt);
              }}
            />
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
